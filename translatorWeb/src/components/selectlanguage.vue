<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
</script>

<template>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-babyblue">
          Select Language ->
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-babyblue text-gray-900' : 'text-navy', 'block px-4 py-2 text-sm']">English</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-babyblue text-gray-900' : 'text-navy', 'block px-4 py-2 text-sm']">Spanish</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-babyblue text-gray-900' : 'text-navy', 'block px-4 py-2 text-sm']">French</a>
            </MenuItem>
            <!--
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button type="submit" :class="[active ? 'bg-babyblue text-gray-900' : 'text-navy', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
              </MenuItem>
            </form>
            -->
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </template>

  