<template>
    <div class="layout-footer">
        <a id="footerlogolink">
            <!-- <img id="footer-logo" :src="'layout/images/logo-' + ($appState.layoutMode === 'light' ? 'poseidon' : 'poseidon-dark') + '.png'" alt="posedion-layout"> -->
            © ERP Nusantara 2023
        </a>
        <div class="social-icons">
            <a><i class="pi pi-github"></i></a>
            <a><i class="pi pi-facebook"></i></a>
            <a><i class="pi pi-twitter"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFooter"
};
</script>