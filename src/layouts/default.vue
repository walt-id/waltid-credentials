<template>
    <div>
        <TransitionRoot :show="sidebarOpen" as="template">
            <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-300"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-300"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button class="-m-2.5 p-2.5" type="button" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <Icon aria-hidden="true" class="h-6 w-6 text-white" name="herocions:xmark" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div class="flex h-16 shrink-0 items-center">
                                    <img alt="VC Repository" class="h-8 w-auto" src="https://vc-repo.walt-test.cloud/logo.png" />
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul class="flex flex-1 flex-col gap-y-7" role="list">
                                        <li>
                                            <ul class="-mx-2 space-y-1" role="list">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <a
                                                        :class="[
                                                            item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                        ]"
                                                        :href="item.href"
                                                    >
                                                        <Icon :name="item.icon" aria-hidden="true" class="h-6 w-6 shrink-0" />
                                                        {{ item.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <!--                                        <li class="mt-auto">
                                            <a class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white" href="#">
                                                <Icon aria-hidden="true" class="h-6 w-6 shrink-0" name="heroicons:cog-6-tooth" />
                                                Settings
                                            </a>
                                        </li>-->
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                    <img alt="VC Repository" class="h-8 w-auto" src="https://vc-repo.walt-test.cloud/logo.png" />
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul class="flex flex-1 flex-col gap-y-7" role="list">
                        <li>
                            <ContentNavigation v-slot="{ navigation }">
                                <ul class="-mx-2 space-y-1" role="list">
                                    <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path">
                                        <li
                                            class="group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                            :class="[route.path === link._path ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700']"
                                        >
                                            <div class="h-6 w-6 shrink-0">
                                                <Icon v-if="link.icon" :name="link.icon" aria-hidden="true" class="h-6 w-6" />
                                            </div>

                                            {{ link.title }}
                                        </li>
                                    </NuxtLink>
                                </ul>
                            </ContentNavigation>
                        </li>
                        <!--                        <li class="mt-auto">
                            <a class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white" href="#">
                                <Icon aria-hidden="true" class="h-6 w-6 shrink-0" name="heroicons:cog-6-tooth" />
                                Settings
                            </a>
                        </li>-->
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div class="sticky top-0 z-40 flex h-10 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-gray-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button class="-m-2.5 p-2.5 text-gray-700 lg:hidden" type="button" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Icon aria-hidden="true" class="h-6 w-6" name="heroicons:bars-3" />
                </button>

                <!-- Separator -->
                <div aria-hidden="true" class="h-6 w-px bg-gray-900/10 lg:hidden" />

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form action="#" class="relative flex flex-1" method="GET">
                        <label class="sr-only" for="search-field">Search</label>
                        <Icon aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" name="heroicons:magnifying-glass" />
                        <input
                            id="search-field"
                            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-gray-700"
                            name="search"
                            placeholder="Search..."
                            type="search"
                        />
                    </form>
                </div>
            </div>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";

const route = useRoute();

const navigation = [
    { name: "Dashboard", href: "#", icon: "heroicons:home", current: true },
    { name: "Team", href: "#", icon: "heroicons:users", current: false },
    { name: "Projects", href: "#", icon: "heroicons:folder", current: false },
    { name: "Calendar", href: "#", icon: "heroicons:calendar", current: false },
    { name: "Documents", href: "#", icon: "heroicons:document-duplicate", current: false },
    { name: "Reports", href: "#", icon: "heroicons:chart-pie", current: false },
];
const teams = [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const sidebarOpen = ref(false);
</script>

<style scoped></style>
