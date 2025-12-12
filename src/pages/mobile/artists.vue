<script setup lang="ts">
import { artistList } from '@/api'
import { useI18n } from 'vue-i18n'
import PageSkeleton from '@/components/PageSkeleton.vue'
import LazyImage from '@/components/Ui/LazyImage.vue'

const { t } = useI18n()

const state = reactive({
  artists: [] as any[],
  isLoading: false,
  type: -1,
  area: -1,
  initial: '',
  offset: 0,
  limit: 30,
  hasMore: true,
})

const { type, area, initial } = toRefs(state)

const typeOptions = [
  { key: -1, labelKey: 'artists.types.all' },
  { key: 1, labelKey: 'artists.types.male' },
  { key: 2, labelKey: 'artists.types.female' },
  { key: 3, labelKey: 'artists.types.band' },
]

const areaOptions = [
  { key: -1, labelKey: 'artists.areas.all' },
  { key: 7, labelKey: 'artists.areas.zh' },
  { key: 96, labelKey: 'artists.areas.ea' },
  { key: 8, labelKey: 'artists.areas.jp' },
  { key: 16, labelKey: 'artists.areas.kr' },
  { key: 0, labelKey: 'artists.areas.other' },
]

const initialOptions = [
  { key: '', labelKey: 'artists.initials.hot' },
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => ({ key: c, labelKey: c })),
]

const loadArtists = async (reset = false) => {
  if (reset) {
    state.offset = 0
    state.artists = []
    state.hasMore = true
  }
  if (!state.hasMore) return
  
  try {
    state.isLoading = true
    const params: any = {
      limit: state.limit,
      offset: state.offset,
    }
    if (state.type !== -1) params.type = state.type
    if (state.area !== -1) params.area = state.area
    if (state.initial) params.initial = state.initial

    const res: any = await artistList(params)
    const list: any[] = res?.artists || res?.data?.artists || []
    
    const mapped = list.map((it: any) => ({
      id: it?.id,
      name: it?.name,
      alias: it?.alias?.join(' / ') || '',
      cover: it?.picUrl || it?.img1v1Url || '',
      albumSize: it?.albumSize || 0,
      mvSize: it?.mvSize || 0,
    }))
    
    state.artists = reset ? mapped : [...state.artists, ...mapped]
    state.hasMore = list.length === state.limit
    state.offset += state.limit
  } finally {
    state.isLoading = false
  }
}

watch([type, area, initial], () => loadArtists(true))

onMounted(() => loadArtists(true))
</script>

<template>
  <div class="flex h-full flex-1 flex-col overflow-hidden">
    <!-- 顶部筛选区域 -->
    <div class="shrink-0 space-y-3 px-4 pt-2 pb-4">
      <h1 class="text-primary text-xl font-bold">{{ t('layout.aside.menu.artists') }}</h1>
      
      <!-- 类型筛选 -->
      <div class="no-scrollbar -mx-4 flex overflow-x-auto px-4">
        <div class="flex gap-2">
          <button
            v-for="opt in typeOptions"
            :key="opt.key"
            class="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all"
            :class="type === opt.key ? 'bg-brand text-white' : 'bg-white/10 text-primary/60'"
            @click="type = opt.key"
          >
            {{ t(opt.labelKey) }}
          </button>
        </div>
      </div>

      <!-- 地区筛选 -->
      <div class="no-scrollbar -mx-4 flex overflow-x-auto px-4">
        <div class="flex gap-2">
          <button
            v-for="opt in areaOptions"
            :key="opt.key"
            class="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all"
            :class="area === opt.key ? 'bg-brand text-white' : 'bg-white/10 text-primary/60'"
            @click="area = opt.key"
          >
            {{ t(opt.labelKey) }}
          </button>
        </div>
      </div>
    </div>

    <!-- 歌手列表 -->
    <div class="flex-1 overflow-auto px-4 pb-4">
      <PageSkeleton v-if="state.isLoading && !state.artists.length" :sections="['grid']" />
      <div v-else class="grid grid-cols-3 gap-3">
        <router-link
          v-for="artist in state.artists"
          :key="artist.id"
          :to="`/artist/${artist.id}`"
          class="group flex flex-col items-center gap-2"
        >
          <div class="relative aspect-square w-full overflow-hidden rounded-full shadow-lg">
            <LazyImage
              :src="artist.cover + '?param=200y200'"
              class="h-full w-full object-cover transition-transform duration-300 group-active:scale-110"
            />
          </div>
          <span class="text-primary line-clamp-1 text-xs font-medium">{{ artist.name }}</span>
        </router-link>
      </div>
      
      <!-- 加载更多 -->
      <div v-if="state.hasMore" class="py-4 text-center">
        <button 
          class="text-primary/40 text-xs"
          @click="loadArtists()"
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
