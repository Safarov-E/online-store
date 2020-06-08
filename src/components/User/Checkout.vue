<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text-secondary mb-3">Orders</h1>
        <v-card 
            class="mx-auto"
        >
                <v-list
                subheader
                two-line
                flat
                >

                <v-list-item-group 
                    multiple
                >
                    <v-list-item
                        v-for="(order, i) in orders"
                        :key="i"
                    >
                        <v-list-item-action>
                        <v-checkbox 
                            :input-value="order.done"
                            color="success"
                            @change="markDone(order)"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{ order.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-btn 
                            :to="'/product/' + order.productId"
                            class="primary"
                        >Open</v-btn>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: 'text',
                    name: 'Konstantin',
                    phone: '22-22-22',
                    productId: '1',
                    done: false
                }
            ]
        }
    },
    methods: {
        markDone (order) {
            order.done = true
        }
    }
}
</script>