<template>
	<div class="layout-topbar">
		<div class="layout-topbar-wrapper">
			<div class="layout-topbar-left">
				<router-link to="/">
					<div
						class="layout-topbar-logo"
						id="logolink"
						style="cursor: pointer; outline: none"
					>
						<img
							id="app-logo"
							alt="poseidon-layout"
							:src="'layout/images/logo-' + (topbarTheme === 'light' ? 'poseidon' : 'poseidon-dark') + '.png'"
						/>
					</div>
				</router-link>
			</div>

			<div class="layout-topbar-right">
				<a
					class="menu-button"
					href="#"
					@click="$emit('menu-button-click', $event)"
				>
					<i class="pi pi-bars"></i>
				</a>

				<ul class="layout-topbar-actions">
					<!-- <li class="search-item topbar-item" :class="{ 'active-topmenuitem': activeTopbarItem === 'search' }">
                        <a href="#" @click="onTopbarItemClick($event, 'search')">
                            <span class="topbar-icon">
                                <i class="pi pi-search"></i>
                            </span>
                        </a>

                        <div class="search-input-wrapper">
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText placeholder="Search..." />
                            </span>
                        </div>

                        <ul class="fadeInDown">
                            <div class="search-input-wrapper p-fluid">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search"></i>
                                    <InputText placeholder="Search..." @click="$emit('search-click', $event)" />
                                </span>
                            </div>
                        </ul>
                    </li> -->

					<!-- <li class="topbar-item notifications"
                        :class="{ 'active-topmenuitem': activeTopbarItem === 'notifications' }">
                        <a href="#" @click="onTopbarItemClick($event, 'notifications')">
                            <span class="p-overlay-badge topbar-icon">
                                <i class="pi pi-bell" v-badge="2"></i>
                            </span>
                        </a>
                        <ul class="fadeInDown">
                            <li class="layout-submenu-header">
                                <h6 class="header-text">Notifications</h6>
                                <span class="p-badge">3</span>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-shopping-cart"></i>
                                    <div class="notifications-item">
                                        <h6>Order <span>#2254</span> is placed</h6>
                                        <span>Total Amount of <span>$34.50</span></span>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-clock"></i>
                                    <div class="notifications-item">
                                        <h6>Meeting with <span>AF04</span> Team</h6>
                                        <span>Google Meets</span>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-th-large"></i>
                                    <div class="notifications-item">
                                        <h6>Task <span>#41</span> is complete</h6>
                                        <span>9 Remaining Tasks</span>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-shopping-cart"></i>
                                    <div class="notifications-item">
                                        <h6>Order <span>#2255</span> is placed</h6>
                                        <span>Total Amount of <span>$40.45</span></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li> -->

					<!-- <li class="topbar-item messages" :class="{ 'active-topmenuitem': activeTopbarItem === 'messages' }">
                        <a href="#" @click="onTopbarItemClick($event, 'messages')">
                            <span class="p-overlay-badge topbar-icon">
                                <i class="pi pi-comments" v-badge="messages.length"></i>
                            </span>
                        </a>
                        <ul class="fadeInDown">
                            <li class="layout-submenu-header">  
                                <h6 class="header-text">Messages</h6>
                                <span class="p-badge">{{ messages.length }}</span>
                            </li>
                            <li v-for="(v, k) in messages" :key="k" role="menuitem">
                                <a @click="$emit('message-click', v)">
                                    <img :src="v.img" alt="demo">
                                    <div class="messages-item">
                                        <h6>{{ v.message }}</h6>
                                        <span>{{ v.from }}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li> -->

					<!-- <li class="topbar-item settings" :class="{ 'active-topmenuitem': activeTopbarItem === 'settings' }">
                        <a href="#" @click="onTopbarItemClick($event, 'settings')">
                            <span class="topbar-icon">
                                <i class="pi pi-cog"></i>
                            </span>
                        </a>
                        <ul class="fadeInDown">
                            <li class="layout-submenu-header">
                                <h6 class="header-text">Settings</h6>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-user"></i>
                                    <div class="settings-item">
                                        <h6>Account Info</h6>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-users"></i>
                                    <div class="settings-item">
                                        <h6>Global Accounts</h6>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-bell"></i>
                                    <div class="settings-item">
                                        <h6>Notification Preferences</h6>
                                    </div>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" @click="onTopbarSubItemClick($event)">
                                    <i class="pi pi-lock"></i>
                                    <div class="settings-item">
                                        <h6>Login Settings</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li> -->

					<li
						class="topbar-item user-profile"
						:class="{ 'active-topmenuitem': activeTopbarItem === 'profile' }"
					>
						<a
							href="#"
							@click="onTopbarItemClick($event, 'profile')"
						>
							<img
								class="profile-image"
								:src="avatar"
								alt="demo"
							/>
							<div class="profile-info">
								<h6>{{ name }}</h6>
								<span>{{ jabatan }}</span>
							</div>
						</a>

						<ul class="fadeInDown">
							<li class="layout-submenu-header">
								<img
									class="profile-image"
									:src="avatar"
									alt="demo"
								/>
								<div class="profile-info">
									<h6>{{ name }}</h6>
									<span>{{ jabatan }}</span>
								</div>
							</li>
							<li role="menuitem">
								<a
									href="#"
									@click="onTopbarSubItemClick($event)"
								>
									<i class="pi pi-cog"></i>
									<h6>Settings</h6>
								</a>
							</li>
							<li role="menuitem">
								<a
									href="#"
									@click="onTopbarSubItemClick($event)"
								>
									<i class="pi pi-file"></i>
									<h6>Terms of Usage</h6>
								</a>
							</li>
							<li role="menuitem">
								<a
									href="#"
									@click="onTopbarSubItemClick($event)"
								>
									<i class="pi pi-compass"></i>
									<h6>Support</h6>
								</a>
							</li>
							<li role="menuitem">
								<a
									href="#"
									@click="$emit('log-out')"
								>
									<i class="pi pi-power-off"></i>
									<h6>Logout</h6>
								</a>
							</li>
						</ul>
					</li>
				</ul>

				<!-- <a class="layout-rightpanel-button" href="#" @click="$emit('right-panel-click', $event)">
                    <i class="pi pi-arrow-left"></i>
                </a> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppTopbar',
	emits: ['menu-button-click', 'right-panel-click', 'topbar-item-click', 'search-click', 'message-click'],
	props: {
		topbarTheme: String,
		activeTopbarItem: String,
		username: String,
		name: String,
		avatar: String,
		jabatan: String,
		messages: Array,
	},
	methods: {
		onTopbarItemClick(event, item) {
			this.$emit('topbar-item-click', { originalEvent: event, item: item });
			event.preventDefault();
		},
		onTopbarSubItemClick(event) {
			event.preventDefault();
		},
	},
};
</script>
