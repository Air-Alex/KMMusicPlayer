<script setup lang="ts">
import { albumNew } from '@/api'
import { useI18n } from 'vue-i18n'
import PageSkeleton from '@/components/PageSkeleton.vue'
import LazyImage from '@/components/Ui/LazyImage.vue'

const { t } = useI18n()

const state = reactive({
  albums: [] as any[],
  isLoading: false,
  area: 'ALL' as 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP',
  offset: 0,
  limit: 30,
  hasMore: true,
})

const { area } = toRefs(state)

const areaOptions = [
  { key: 'ALL', labelKey: 'newAlbums.areas.all' },
  { key: 'ZH', labelKey: 'newAlbums.areas.zh' },
  { key: 'EA', labelKey: 'newAlbums.areas.ea' },
  { key: 'JP', labelKey: 'newAlbums.areas.jp' },
  { key: 'KR', labelKey: 'newAlbums.areas.kr' },
]

const loadAlbums = async (reset = false) => {
  if (reset) {
    state.offset = 0
    state.albums = []
    state.hasMore = true
  }
  if (!state.hasMore) return

  try {
    state.isLoading = true
    const res: any = await albumNew({
      area: state.area,
      limit: state.limit,
      offset: state.offset,
    })
    const list: any[] = res?.albums || res?.data?.albums || []

    const mapped = list.map((it: any) => ({
      id: it?.id,
      name: it?.name,
      artist: it?.artist?.name || it?.artists?.map((a: any) => a.name).join(' / ') || '',
      artistId: it?.artist?.id || it?.artists?.[0]?.id || 0,
      cover: it?.picUrl || it?.blurPicUrl || '',
      publishTime: it?.publishTime || 0,
      size: it?.size || 0,
    }))

    state.albums = reset ? mapped : [...state.albums, ...mapped]
    state.hasMore = list.length === state.limit
    state.offset += state.limit
  } finally {
    state.isLoading = false
  }
}

watch(area, () => loadAlbums(true))

onMounted(() => loadAlbums(true))
</script>

<template>
  <div class="flex h-full flex-1 flex-col overflow-hidden">
    <!-- 顶部筛选区域 -->
    <div class="shrink-0 space-y-3 px-4 pt-2 pb-4">
      <h1 class="text-primary text-xl font-bold">{{ t('newAlbums.title') }}</h1>
      
      <!-- 地区筛选 -->
      <div class="no-scrollbar -mx-4 flex overflow-x-auto px-4">
        <div class="flex gap-2">
          <button
            v-for="opt in areaOptions"
            :key="opt.key"
            class="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all"
            :class="area === opt.key ? 'bg-primary text-white' : 'bg-white/10 text-primary/60'"
            @click="area = opt.key as any"
          >
            {{ t(opt.labelKey) }}
          </button>
        </div>
      </div>
    </div>

    <!-- 专辑列表 -->
    <div class="flex-1 overflow-auto px-4 pb-4">
      <PageSkeleton v-if="state.isLoading && !state.albums.length" :sections="['grid']" />
      <div v-else class="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <router-link
          v-for="album in state.albums"
          :key="album.id"
          :to="`/album/${album.id}`"
          class="group flex flex-col gap-2"
        >
          <div class="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
            <LazyImage
              :src="album.cover + '?param=300y300'"
              class="h-full w-full object-cover transition-transform duration-300 group-active:scale-110"
            />
          </div>
          <div>
            <span class="text-primary line-clamp-1 text-xs font-bold">{{ album.name }}</span>
            <span class="text-primary/60 line-clamp-1 text-[10px]">{{ album.artist }}</span>
          </div>
        </router-link>
      </div>
      
      <!-- 加载更多 -->
      <div v-if="state.hasMore" class="py-4 text-center">
        <button 
          class="text-primary/40 text-xs"
          @click="loadAlbums()"
          :disabled="state.isLoading"
        >
          {{ state.isLoading ? t('common.loading') : t('mvList.actions.loadMore') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
