<template>
    <div>
         <v-chip
            v-for="item in items"
            :key="item"
            class="ma-1"
            >
            {{item}}
        </v-chip>
    </div>
</template>

<script>
export default {
    name: "ChipList",
    props: ["items"]
}
</script>