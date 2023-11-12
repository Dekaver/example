<template>
	<div class="layout-menu-container">
		<AppSubmenu
			class="layout-menu"
			:items="model"
			:menuMode="menuMode"
			:parentMenuItemActive="true"
			:menuActive="active"
			:mobileMenuActive="mobileMenuActive"
			:root="true"
			@menuitem-click="onMenuItemClick"
			@root-menuitem-click="onRootMenuItemClick"
		/>
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu.vue';
export default {
	name: 'AppMenu',
	emits: ['menu-click', 'menuitem-click', 'root-menuitem-click'],
	props: {
		model: Array,
		menuMode: String,
		active: Boolean,
		mobileMenuActive: Boolean,
	},
	methods: {
		onMenuItemClick(event) {
			this.$emit('menuitem-click', event);
		},
		onRootMenuItemClick(event) {
			this.$emit('root-menuitem-click', event);
		},
	},
	components: {
		AppSubmenu,
	},
};
</script>
