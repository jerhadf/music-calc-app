<template>
    <section>
        <b-field>
            <button class="button is-light is-outlined is-large" @click="open">
                <p class="btn-txt"> Calculate! </p>
            </button>
        </b-field>
         <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isFullPage: true,
            }
        },
        methods: {
            open() {
                const loadingComponent = this.$loading.open({
                    container: this.isFullPage ? null : this.$refs.element.$el
                })
                setTimeout(() => loadingComponent.close(), 3 * 1000)
            }
        }
    }
</script>

<style scoped> 
    .btn-txt {
        font-weight: 500;
    }
</style> 