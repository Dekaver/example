<template>
	<div
		:class="containerClass"
		@click="onDocumentClick($event)"
	>
		<AppTopBar
			:topbarTheme="topbarTheme"
			:activeTopbarItem="activeTopbarItem"
			@menu-button-click="onMenuButtonClick($event)"
			@right-panel-click="onRightPanelButtonClick"
			@topbar-item-click="onTopbarItemClick"
			@search-click="onSearchClick"
			@click="null"
			@log-out="logout"
			v-bind="user"
			:messages="messages"
		></AppTopBar>

		<AppRightPanel @right-panel-click="onRightPanelClick"></AppRightPanel>

		<div
			class="menu-wrapper"
			@click="onMenuClick($event)"
		>
			<AppMenu
				:model="menu"
				:active="menuActive"
				:mobileMenuActive="staticMenuMobileActive"
				:menuMode="menuMode"
				@menu-click="onMenuClick"
				@menuitem-click="onMenuItemClick"
				@root-menuitem-click="onRootMenuItemClick"
			>
			</AppMenu>
		</div>

		<div class="layout-main">
			<AppBreadcrumb></AppBreadcrumb>
			<Toast />
			<div class="layout-content">
				<NuxtPage />
			</div>

			<AppFooter></AppFooter>
		</div>

		<AppConfig
			v-if="false"
			v-model:theme="theme"
			v-model:layoutMode="layoutMode"
			v-model:menuMode="menuMode"
			v-model:menuTheme="menuTheme"
			v-model:topbarTheme="topbarTheme"
			:configActive="configActive"
			:configClick="configClick"
			@config-click="onConfigClick"
			@config-button-click="onConfigButtonClick"
		></AppConfig>

		<div
			v-if="staticMenuMobileActive"
			class="layout-mask modal-in"
		></div>
	</div>
</template>

<script>
import EventBus from './event-bus';
import AppTopBar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppMenu from './AppMenu.vue';
import AppConfig from './AppConfig.vue';
import AppRightPanel from './AppRightPanel.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
// import VueNativeNotification from 'vue-native-notification'

export default {
	data() {
		return {
			theme: 'denim',
			topbarTheme: 'dark',
			menuTheme: 'dim',
			layoutMode: 'light',
			menuMode: 'static',
			activeTopbarItem: null,
			menuActive: true,
			overlayMenuActive: false,
			staticMenuDesktopInactive: false,
			staticMenuMobileActive: false,
			menuClick: false,
			searchActive: false,
			searchClick: true,
			userMenuClick: false,
			topbarMenuActive: false,
			rightPanelClick: false,
			rightPanelActive: false,
			configActive: false,
			configClick: false,
			menu: [],
			menuData: [],
			messages: [],
			user: {},
		};
	},
	created() {
		this.user.id = 'id';
		this.user.name = 'user';
		this.user.jabatan = 'user';
		this.user.avatar = 'layout/images/avatar-profile.png';

		this.getMenus();
	},
	computed: {
		containerClass() {
			return [
				'layout-wrapper',
				{
					'layout-overlay': this.menuMode === 'overlay',
					'layout-static': this.menuMode === 'static',
					'layout-horizontal': this.menuMode === 'horizontal',
					'layout-overlay-active': this.overlayMenuActive,
					'layout-mobile-active': this.staticMenuMobileActive,
					'layout-static-active': !this.staticMenuDesktopInactive && this.menuMode === 'static',
					'layout-rightpanel-active': this.rightPanelActive,
					'layout-rtl': false,
					'p-input-filled': this.$primevue.config.inputStyle === 'filled',
					'p-ripple-disabled': !this.$primevue.config.ripple,
				},
				'layout-menu-' + this.menuTheme + ' layout-topbar-' + this.topbarTheme,
			];
		},
	},
	watch: {
		$route() {
			this.menuActive = false;
			this.$toast.removeAllGroups();
		},
		menu: {
			handler() {
				this.getMenus();
			},
		},
	},
	methods: {
		getMenus() {
			this.menuData = [
				{
					id: 400,
					name: 'Sales',
					icon: 'pi pi-at',
					outcome: '#',
					urut: 8,
					parent: null,
					keterangan: 'Master Brand',
					jenis: 'G',
					roles: 'ROLE_BRAND',
				},
				{
					id: 401,
					name: 'Work Order',
					icon: 'pi pi-at',
					outcome: '/work-order',
					urut: 8,
					parent: 400,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_WO',
				},
				{
					id: 402,
					name: 'Purchase Order',
					icon: 'pi pi-at',
					outcome: '/purchase-order',
					urut: 8,
					parent: 400,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 403,
					name: 'Purchase Request',
					icon: 'pi pi-at',
					outcome: '/purchase-request',
					urut: 8,
					parent: 400,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 200,
					name: 'Master',
					icon: 'pi pi-at',
					outcome: '#',
					urut: 10,
					parent: null,
					keterangan: 'Master Brand',
					jenis: 'G',
					roles: 'ROLE_BRAND',
				},
				{
					id: 100,
					name: 'HRD',
					icon: 'pi pi-at',
					outcome: '#',
					urut: 2,
					parent: null,
					keterangan: 'Master Brand',
					jenis: 'G',
					roles: 'ROLE_BRAND',
				},
				{
					id: 300,
					name: 'Warehouse',
					icon: 'pi pi-at',
					outcome: '#',
					urut: 9,
					parent: null,
					keterangan: 'Master Brand',
					jenis: 'G',
					roles: 'ROLE_BRAND',
				},
				{
					id: 100,
					name: 'Laporan',
					icon: 'pi pi-at',
					outcome: '#',
					urut: 10,
					parent: null,
					keterangan: 'Master Brand',
					jenis: 'G',
					roles: 'ROLE_BRAND',
				},
				{
					id: 103,
					name: 'Pegawai',
					icon: 'pi pi-at',
					outcome: '/pegawai',
					urut: 8,
					parent: 100,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 201,
					name: 'Satuan',
					icon: 'pi pi-at',
					outcome: '/satuan',
					urut: 8,
					parent: 200,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 202,
					name: 'Jabatan',
					icon: 'pi pi-at',
					outcome: '/jabatan',
					urut: 8,
					parent: 200,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 204,
					name: 'Barang',
					icon: 'pi pi-at',
					outcome: '/produk',
					urut: 8,
					parent: 200,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 401,
					name: 'Stok Barang',
					icon: 'pi pi-at',
					outcome: '/report/stok-barang',
					urut: 1,
					parent: 100,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 301,
					name: 'Penerimaan Barang',
					icon: 'pi pi-at',
					outcome: '/penerimaanbarang',
					urut: 1,
					parent: 300,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
				{
					id: 302,
					name: 'Pemakaian Barang',
					icon: 'pi pi-at',
					outcome: '/usage',
					urut: 1,
					parent: 300,
					keterangan: 'Master Brand',
					jenis: 'D',
					roles: 'ROLE_BRAND',
				},
			];
			let menuGroup = this.menuData.filter((menu) => menu.jenis === 'G' && menu.parent == null);
			menuGroup.forEach((v) => {
				let menuItem = {};
				menuItem.label = v.name;
				menuItem.icon = v.icon;
				menuItem.items = [];
				this.getChild(menuItem.items, v.id);
				this.menu.push(menuItem);
			});
		},
		getChild(lMenu, parent) {
			let menuGroup = this.menuData.filter((menu) => menu.parent === parent);
			if (menuGroup.length != 0) {
				menuGroup.forEach((v) => {
					let menuItem = {};
					menuItem.label = v.name;
					menuItem.icon = v.icon;
					if (v.jenis === 'D') {
						menuItem.to = v.outcome;
						menuItem.url = v.url;
						menuItem.target = v.target;
					} else {
						menuItem.items = [];
						this.getChild(menuItem.items, v.id);
					}
					lMenu.push(menuItem);
				});
			}
		},
		//  TODO: baikin logout
		logout() {
			// this.$auth.logout()
			// Logout();
		},
		onDocumentClick() {
			if (!this.searchClick) {
				this.searchActive = false;
			}

			if (!this.topbarItemClick) {
				this.activeTopbarItem = null;
				this.topbarMenuActive = false;
			}

			if (!this.userMenuClick) {
				this.topbarMenuActive = false;
			}

			if (!this.rightPanelClick) {
				this.rightPanelActive = false;
			}

			if (!this.menuClick) {
				if (this.isHorizontal()) {
					EventBus.emit('reset-active-index');
					this.menuActive = false;
				}

				if (this.overlayMenuActive || this.staticMenuMobileActive) {
					this.hideOverlayMenu();
				}

				this.unblockBodyScroll();
			}

			if (this.configActive && !this.configClick) {
				this.configActive = false;
			}

			this.searchClick = false;
			this.configClick = false;
			this.topbarItemClick = false;
			this.rightPanelClick = false;
			this.menuClick = false;
		},
		onMenuClick() {
			this.menuClick = true;
		},
		onMenuButtonClick(event) {
			this.rotateMenuButton = !this.rotateMenuButton;
			this.topbarMenuActive = false;
			this.menuClick = true;

			if (this.isOverlay() && !this.isMobile()) {
				this.overlayMenuActive = !this.overlayMenuActive;
			}

			if (this.isDesktop()) {
				this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
			} else {
				this.staticMenuMobileActive = !this.staticMenuMobileActive;
				if (this.staticMenuMobileActive) {
					this.blockBodyScroll();
				} else {
					this.unblockBodyScroll();
				}
			}

			event.preventDefault();
		},
		onMenuItemClick(event) {
			if (!event.item.items) {
				EventBus.emit('reset-active-index');
				this.hideOverlayMenu();
			}
			if (!event.item.items && this.isHorizontal()) {
				this.menuActive = false;
			}
		},
		onRootMenuItemClick() {
			this.menuActive = !this.menuActive;
		},
		onRightPanelClick() {
			this.rightPanelClick = true;
		},
		onRightPanelButtonClick(event) {
			this.rightPanelClick = true;
			this.rightPanelActive = !this.rightPanelActive;
			event.preventDefault();
		},
		onTopbarItemClick(event) {
			this.topbarItemClick = true;

			if (this.activeTopbarItem === event.item) {
				this.activeTopbarItem = null;
			} else {
				this.activeTopbarItem = event.item;
			}

			if (event.item === 'search') {
				this.searchActive = !this.searchActive;
				this.searchClick = !this.searchClick;
			}

			event.originalEvent.preventDefault();
		},
		onSearchClick(event) {
			this.searchClick = true;
			event.stopPropagation();
		},
		onConfigClick() {
			this.configClick = true;
		},
		onConfigButtonClick() {
			this.configActive = !this.configActive;
			this.configClick = true;
		},
		hideOverlayMenu() {
			this.overlayMenuActive = false;
			this.staticMenuMobileActive = false;
			this.unblockBodyScroll();
		},
		blockBodyScroll() {
			if (document.body.classList) {
				document.body.classList.add('blocked-scroll');
			} else {
				document.body.className += ' blocked-scroll';
			}
		},
		unblockBodyScroll() {
			if (document.body.classList) {
				document.body.classList.remove('blocked-scroll');
			} else {
				document.body.className = document.body.className.replace(
					new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'),
					' '
				);
			}
		},
		isTablet() {
			const width = window.innerWidth;
			return width <= 1024 && width > 640;
		},
		isDesktop() {
			return window.innerWidth > 992;
		},
		isMobile() {
			return window.innerWidth <= 640;
		},
		isOverlay() {
			return this.menuMode === 'overlay';
		},
		isStatic() {
			return this.menuMode === 'static';
		},
		isHorizontal() {
			return this.menuMode === 'horizontal';
		},
	},
	components: {
		AppTopBar,
		AppMenu,
		AppFooter,
		AppConfig,
		AppRightPanel,
		AppBreadcrumb,
	},
};
</script>
