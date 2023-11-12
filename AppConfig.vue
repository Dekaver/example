<template>
	<div
		class="layout-config"
		:class="{ 'layout-config-active': configActive }"
		@click="onConfigClick"
	>
		<a
			id="layout-config-button"
			class="layout-config-button"
			@click="onConfigButtonClick($event)"
		>
			<i class="pi pi-cog"></i>
		</a>

		<div class="layout-config-content">
			<div class="layout-config-form">
				<div class="layout-config-header">
					<h5>Theme Customization</h5>
					<span>Poseidon offers different themes for layout, topbar, menu etc.</span>
				</div>

				<div class="layout-config-section options">
					<h6>Color Mode</h6>
					<div class="flex justify-content-between">
						<div class="flex align-items-center">
							<RadioButton
								name="layoutMode"
								value="light"
								v-model="d_layoutMode"
								id="theme1"
								@change="changeLayoutMode('light')"
							></RadioButton>
							<label
								for="theme3"
								class="ml-2"
								>Light</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="layoutMode"
								value="dark"
								v-model="d_layoutMode"
								id="theme2"
								@change="changeLayoutMode('dark')"
							></RadioButton>
							<label
								for="theme1"
								class="ml-2"
								>Dark</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="layoutMode"
								value="dim"
								v-model="d_layoutMode"
								id="theme3"
								@change="changeLayoutMode('dim')"
							></RadioButton>
							<label
								for="theme2"
								class="ml-2"
								>Dim</label
							>
						</div>
					</div>
				</div>

				<div class="layout-config-section options">
					<h6 class="mt-2">Menu Mode</h6>
					<div class="flex justify-content-between">
						<div class="flex align-items-center">
							<RadioButton
								name="menuMode"
								value="static"
								v-model="d_menuMode"
								id="mode1"
								@change="changeMenuMode('static')"
							></RadioButton>
							<label
								for="mode1"
								class="ml-2"
								>Static</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="menuMode"
								value="overlay"
								v-model="d_menuMode"
								id="mode2"
								@change="changeMenuMode('overlay')"
							></RadioButton>
							<label
								for="mode2"
								class="ml-2"
								>Overlay</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="menuMode"
								value="horizontal"
								v-model="d_menuMode"
								id="mode4"
								@change="changeMenuMode('horizontal')"
							></RadioButton>
							<label
								for="mode4"
								class="ml-2"
								>Horizontal</label
							>
						</div>
					</div>
				</div>

				<div class="layout-config-section options">
					<h6 class="mt-2">Menu Theme</h6>
					<div class="flex justify-content-between">
						<div class="flex align-items-center">
							<RadioButton
								name="menuTheme"
								value="light"
								v-model="d_menuTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme1"
								@change="changeMenuTheme('light')"
							></RadioButton>
							<label
								for="mode1"
								class="ml-2"
								>Light</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="menuTheme"
								value="dark"
								v-model="d_menuTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme2"
								@change="changeMenuTheme('dark')"
							></RadioButton>
							<label
								for="mode2"
								class="ml-2"
								>Dark</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="menuTheme"
								value="dim"
								v-model="d_menuTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme3"
								@change="changeMenuTheme('dim')"
							></RadioButton>
							<label
								for="mode4"
								class="ml-2"
								>Dim</label
							>
						</div>
					</div>
				</div>

				<div class="layout-config-section options">
					<h6 class="mt-2">Topbar Mode</h6>
					<div class="flex justify-content-between">
						<div class="flex align-items-center">
							<RadioButton
								name="topbarTheme"
								value="light"
								v-model="d_topbarTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme1"
								@change="changeTopbarTheme('light')"
							></RadioButton>
							<label
								for="mode1"
								class="ml-2"
								>Light</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="topbarTheme"
								value="dark"
								v-model="d_topbarTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme2"
								@change="changeTopbarTheme('dark')"
							></RadioButton>
							<label
								for="mode2"
								class="ml-2"
								>Dark</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								name="topbarTheme"
								value="dim"
								v-model="d_topbarTheme"
								:disabled="layoutMode !== 'light'"
								id="menuTheme3"
								@change="changeTopbarTheme('dim')"
							></RadioButton>
							<label
								for="mode4"
								class="ml-2"
								>Dim</label
							>
						</div>
					</div>
				</div>

				<div class="layout-config-section options">
					<h6 class="mt-2">Input Background</h6>
					<div class="flex justify-content-between">
						<div class="flex align-items-center">
							<RadioButton
								id="input_outlined"
								name="inputstyle"
								value="outlined"
								:modelValue="inputStyle"
								@update:modelValue="onChange"
							/>
							<label
								for="input_outlined"
								class="ml-2"
								>Outlined</label
							>
						</div>
						<div class="flex align-items-center">
							<RadioButton
								id="input_filled"
								name="inputstyle"
								value="filled"
								:modelValue="inputStyle"
								@update:modelValue="onChange"
							/>
							<label
								for="input_filled"
								class="ml-2"
								>Filled</label
							>
						</div>
					</div>
				</div>

				<div class="layout-config-section ripple">
					<h6 class="mt-2">Ripple Effect</h6>
					<InputSwitch
						:modelValue="rippleActive"
						@update:modelValue="onRippleChange"
					/>
				</div>

				<div class="layout-config-section dark">
					<h6 class="mt-2">RTL</h6>
					<InputSwitch
						:modelValue="isRTLActive"
						@update:modelValue="onRTLChange"
					/>
				</div>

				<div class="layout-config-section colors">
					<h6 class="mt-2">Component Themes</h6>
					<div class="grid layout-config-colors">
						<div
							class="col col-fixed"
							v-for="t in themes"
							:key="t.name"
						>
							<a
								class="layout-config-option"
								style="cursor: pointer"
								@click="changeComponentTheme(t.name)"
							>
								<span
									class="layout-config-option-color"
									:style="{ 'background-color': t.color }"
								></span>
								<span
									class="layout-config-option-check-mask"
									v-if="theme === t.name"
								>
									<i class="pi pi-check"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppConfig',
	emits: ['config-button-click', 'config-click', 'update:menuMode', 'update:menuTheme', 'update:layoutMode', 'update:topbarTheme', 'update:theme'],
	props: {
		configActive: {
			type: Boolean,
			default: null,
		},
		configClick: {
			type: Boolean,
			default: null,
		},
		theme: String,
		layoutMode: String,
		menuTheme: String,
		menuMode: String,
		topbarTheme: String,
	},
	data() {
		return {
			themes: [
				{ name: 'denim', color: '#2f8ee5' },
				{ name: 'sea-green', color: '#30A059' },
				{ name: 'amethyst', color: '#834CA8' },
				{ name: 'wedgewood', color: '#557DAA' },
				{ name: 'tapestry', color: '#A74896' },
				{ name: 'cape-palliser', color: '#A46B3E' },
				{ name: 'apple', color: '#52A235' },
				{ name: 'gigas', color: '#5751A9' },
				{ name: 'jungle-green', color: '#2B9F9C' },
				{ name: 'camelot', color: '#A54357' },
				{ name: 'amber', color: '#D49341' },
				{ name: 'cyan', color: '#399DB2' },
			],
			d_layoutMode: this.layoutMode,
			d_menuMode: this.menuMode,
			d_menuTheme: this.menuTheme,
			d_topbarTheme: this.topbarTheme,
		};
	},
	computed: {
		rippleActive() {
			return this.$primevue.config.ripple;
		},
		inputStyle() {
			return this.$primevue.config.inputStyle;
		},
		isRTLActive() {
			return false;
		},
	},
	watch: {
		menuTheme(newValue) {
			this.d_menuTheme = newValue;
		},
		topbarTheme(newValue) {
			this.d_topbarTheme = newValue;
		},
	},
	methods: {
		changeComponentTheme(theme) {
			this.$emit('update:theme', theme);
			this.changeStyleSheetUrl('theme-css', theme, 3);
		},
		onConfigButtonClick(event) {
			this.$emit('config-button-click', event);
			event.preventDefault();
		},
		onConfigClick(event) {
			this.$emit('config-click', event);
		},
		onChange(value) {
			this.$primevue.config.inputStyle = value;
		},
		onRippleChange(value) {
			this.$primevue.config.ripple = value;
		},
		onRTLChange(value) {
			this.$appState.isRTL = value;
		},
		changeMenuMode(mode) {
			this.$emit('update:menuMode', mode);
		},
		changeMenuTheme(name) {
			this.$emit('update:menuTheme', name);
		},
		changeTopbarTheme(name) {
			this.$emit('update:topbarTheme', name);
		},
		changeLayoutMode(scheme) {
			this.$emit('update:layoutMode', scheme);
			this.$emit('update:menuTheme', scheme);
			this.$emit('update:topbarTheme', scheme);
			this.$appState.layoutMode = scheme;

			this.changeStyleSheetUrl('layout-css', 'layout-' + scheme + '.css', 1);
			this.changeStyleSheetUrl('theme-css', 'theme-' + scheme + '.css', 1);
		},
		changeStyleSheetUrl(id, value, from) {
			const element = document.getElementById(id);
			const urlTokens = element.getAttribute('href').split('/');

			if (from === 1) {
				// which function invoked this function
				urlTokens[urlTokens.length - 1] = value;
			} else if (from === 2) {
				// which function invoked this function
				if (value !== null) {
					urlTokens[urlTokens.length - 2] = value;
				}
			} else if (from === 3) {
				// which function invoked this function
				urlTokens[urlTokens.length - 2] = value;
			}

			const newURL = urlTokens.join('/');

			this.replaceLink(element, newURL, () => {
				this.$appState.isNewThemeLoaded = true;
			});
		},
		replaceLink(linkElement, href, callback) {
			if (this.isIE()) {
				linkElement.setAttribute('href', href);
			} else {
				const id = linkElement.getAttribute('id');
				const cloneLinkElement = linkElement.cloneNode(true);

				cloneLinkElement.setAttribute('href', href);
				cloneLinkElement.setAttribute('id', id + '-clone');

				linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

				cloneLinkElement.addEventListener('load', () => {
					linkElement.remove();
					cloneLinkElement.setAttribute('id', id);

					if (callback) {
						callback();
					}
				});
			}
		},
		isIE() {
			return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
		},
	},
};
</script>
