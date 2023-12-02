<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Prueba ComparaSoftware</a>
            <button
                class="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                id="navbarSideCollapse"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" active-class="active">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/new-note" class="nav-link" active-class="active">
                            Nueva Nota
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="container pt-5">
        <RouterView />
    </main>
</template>
<script setup>
    import { RouterLink, RouterView } from "vue-router";
</script>
