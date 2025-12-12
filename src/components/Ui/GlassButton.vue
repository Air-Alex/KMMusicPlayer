<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon-sm' | 'icon-md' | 'icon-lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  loading?: boolean
  disabled?: boolean
  block?: boolean
  rounded?: boolean // fully rounded caps
  active?: boolean // for toggle states
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary',
  size: 'md',
  loading: false,
  disabled: false,
  block: false,
  rounded: true,
  active: false,
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const classes = computed(() => {
  const base = [
    'inline-flex items-center justify-center gap-2 transition-all duration-300 font-medium select-none',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 cursor-pointer',
    props.rounded ? 'rounded-full' : 'rounded-xl',
    props.block ? 'w-full flex-1' : '',
  ]

  // Variants
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand/90 border border-transparent',
    secondary: 'bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 active:bg-primary/15',
    ghost: 'bg-transparent text-primary hover:bg-hover-item-bg border border-transparent',
    outline: 'bg-transparent text-primary border border-primary/10 hover:bg-primary/5',
    danger: 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20',
  }

  // Sizes
  const sizes: Record<ButtonSize, string> = {
    xs: 'px-2.5 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    'icon-sm': 'w-8 h-8 p-0',
    'icon-md': 'w-10 h-10 p-0',
    'icon-lg': 'w-12 h-12 p-0',
  }

  // Active state override for some variants
  let variantClass = variants[props.variant]
  if (props.active) {
    if (props.variant === 'secondary' || props.variant === 'ghost' || props.variant === 'outline') {
      variantClass = 'bg-brand/20 text-brand border-brand/20'
    }
  }

  return [...base, variantClass, sizes[props.size]]
})

const iconSizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'h-3.5 w-3.5'
    case 'sm': return 'h-4 w-4'
    case 'lg': return 'h-6 w-6'
    case 'icon-sm': return 'h-4 w-4'
    case 'icon-lg': return 'h-6 w-6'
    default: return 'h-5 w-5' // md & icon-md
  }
})

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <span v-if="loading" class="icon-[svg-spinners--180-ring-with-bg] animate-spin" :class="iconSizeClass" />
    <span v-else-if="icon" :class="[icon, iconSizeClass]" />
    <slot />
  </button>
</template>
