<template>
	<ul
		v-if="items && items.length > 0"
		role="menu"
	>
		<template v-for="(item, i) of items">
			<li
				v-if="visible(item) && !item.separator"
				:key="item.label || i"
				:class="[{ 'layout-root-menuitem': root, 'active-menuitem': activeIndex === i && !item.disabled }]"
				role="menuitem"
			>
				<div v-if="root && menuMode !== 'horizontal' && item.visible !== false">
					<span class="layout-menuitem-text">{{ item.label }}</span>
				</div>
				<NuxtLink
					v-if="item.to"
					:to="item.to"
					:style="item.style"
					:class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
					exact-active-class="active-route"
					:target="item.target"
					exact
					@click="onMenuItemClick($event, item, i)"
					@mouseenter="onMenuItemMouseEnter(i)"
					v-ripple
				>
					<i :class="['layout-menuitem-icon', item.icon]"></i>
					<span class="layout-menuitem-text">{{ item.label }}</span>
					<i
						v-if="item.items && item.items.length > 0"
						class="pi pi-fw pi-angle-down layout-submenu-toggler"
					></i>
				</NuxtLink>
				<a
					v-if="!item.to"
					:href="item.url || '#'"
					:style="item.style"
					:class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
					:target="item.target"
					@click="onMenuItemClick($event, item, i)"
					@mouseenter="onMenuItemMouseEnter(i)"
					v-ripple
				>
					<i :class="['layout-menuitem-icon', item.icon]"></i>
					<span class="layout-menuitem-text">{{ item.label }}</span>
					<i
						v-if="item.items && item.items.length > 0"
						class="pi pi-fw pi-angle-down layout-submenu-toggler"
					></i>
				</a>
				<transition
					name="layout-menu"
					class="menu"
				>
					<appsubmenu
						v-show="
							item.items &&
							(root && (menuMode !== 'horizontal' || (menuMode === 'horizontal' && (mobileMenuActive || activeIndex !== null)))
								? true
								: activeIndex === i)
						"
						:items="visible(item) && item.items"
						:menuActive="menuActive"
						:menuMode="menuMode"
						:parentMenuItemActive="activeIndex === i"
						@menuitem-click="$emit('menuitem-click', $event)"
						style="max-height: 500px"
					>
					</appsubmenu>
				</transition>
			</li>
		</template>
	</ul>
</template>

<script>
import EventBus from './event-bus';

export default {
	name: 'appsubmenu',
	emits: ['root-menuitem-click', 'menuitem-click'],
	props: {
		items: Array,
		menuMode: String,
		menuActive: Boolean,
		mobileMenuActive: Boolean,
		root: {
			type: Boolean,
			default: false,
		},
		parentMenuItemActive: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			activeIndex: null,
		};
	},
	mounted() {
		EventBus.on('reset-active-index', () => {
			if (this.menuMode === 'horizontal') {
				this.activeIndex = false;
			}
		});
	},
	methods: {
		onMenuItemClick(event, item, index) {
			if (item.disabled) {
				event.preventDefault();
				return;
			}

			//execute command
			if (item.command) {
				item.command({ originalEvent: event, item: item });
				event.preventDefault();
			}

			if (item.items) {
				event.preventDefault();
			}

			if (this.root) {
				this.$emit('root-menuitem-click', {
					originalEvent: event,
				});
			}

			if (item.items) {
				this.activeIndex = index === this.activeIndex ? null : index;
			} else {
				// if (this.menuMode !== 'static') {
				//     const ink = this.getInk(event.currentTarget);
				//     if (ink) {
				//         this.removeClass(ink, 'p-ink-active');
				//     }
				// }
			}

			this.$emit('menuitem-click', {
				originalEvent: event,
				item: item,
			});
		},
		onMenuItemMouseEnter(index) {
			if (this.root && this.menuActive && this.menuMode === 'horizontal' && !this.isMobile()) {
				this.activeIndex = index;
			}
		},
		visible(item) {
			return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
		},
		isMobile() {
			return window.innerWidth <= 1091;
		},
	},
};
</script>

<style>
.menu {
	height: fit-content;
	max-height: 200px;
	overflow-y: visible;
}
</style>
