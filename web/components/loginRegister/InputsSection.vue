<script lang="ts">
export default ({
    name: 'InputsSection',
    props: {
        login: {
            type: Boolean,
            required: true,
        },
        submitForm: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            link: this.login ? '/register' : '/login',
            action: this.login ? "t’inscrire ici !" : "te connecter ici",
            registered: this.login ? "Si tu n'es pas encore inscrit," : "Tu es déjà inscrit ?",
            userLogin: {
                email: '',
                password: '',
                username: '',
                passwordVerif: ""
            },
        }
    },
})
</script>

<template>
    <div class="grow">
        <NuxtLink to="/">
            <h1 class="font-integral font-bold text-2xl 2xl:text-4xl self-start p-10">INFLINE</h1>
        </NuxtLink>
        <form method="post" @submit.prevent="submitForm(userLogin)" class="px-32 py-16 flex flex-col space-y-10">
            <!-- Font Hack -->
            <span class="font-integral font-bold text-5xl">{{ login ? "SE CONNECTER" : "S" }}<span v-if="!login"
                    class="font-poppins">'</span>{{ login ? "" : "INSCRIRE" }}</span>
            <div class="flex flex-col gap-2">
                <span class="font-poppins text-xl">{{ registered
                }}</span>
                <span class="font-poppins text-xl">Tu peux <NuxtLink :to="link"><span class="text-infline-purple">{{
                    action
                }}</span>
                    </NuxtLink></span>
            </div>
            <div class="w-full border border-solid border-red-500 bg-red-500 opacity-80 flex justify-center items-center p-2"
                v-if="userLogin.password != userLogin.passwordVerif">
                <span class="text-white">Attention les mots de passes ne correspondent pas</span>
            </div>
            <CoreInput v-model.trim="userLogin.email" type="text" label="E-mail" icon="./assets/images/mail.svg"
                placeholder="Entre ton addresse e-mail" />
            <CoreInput v-model.trim="userLogin.username" type="text" label="Nom d'utilisateur"
                icon="./assets/images/mail.svg" placeholder="Entre ton nom d'utilisateur" />
            <div class="flex flex-col gap-4">
                <CoreInput v-model="userLogin.password" type="password" label="Mot de passe"
                    icon="./assets/images/password.svg" placeholder="Entre ton mot de passe" />
                <div v-if="login" class="flex flex-row justify-between font-poppins">
                    <div class="flex flex-row gap-2">
                        <input type="checkbox" class="w-4 h-4" />
                        <label for="">Se souvenir de moi</label>
                    </div>
                    <a href=""><span class="text-[#999999]">Mot de passe oublié ?</span></a>
                </div>
            </div>
            <CoreInput type="password" v-if="!login" v-model="userLogin.passwordVerif" label="Confirmation de mot de passe"
                icon="./assets/images/password.svg" placeholder="Confirmation ton mot de passe" />
            <CoreButton type="submit" class="bg-infline-purple text-white w-1/2">
                {{ login ? "SE CONNECTER" : "S" }}<span v-if="!login" class="font-poppins">'</span>{{ login ? "" :
                    "INSCRIRE" }}
            </CoreButton>
            <span v-if="login" class="self-center text-[#B5B5B5] font-poppins">Ou continue avec</span>
            <div v-if="login" class="flex flex-row gap-10 self-center">
                <img src="@/assets/images/logo/Facebook.svg" alt="">
                <img src="@/assets/images/logo/apple.svg" alt="">
                <img src="@/assets/images/logo/google.svg" alt="">
            </div>
        </form>
    </div>
</template>