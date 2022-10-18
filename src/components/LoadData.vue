<template>
    <div>
        <table>
            <thead>
                <th>Trx ID</th>
                <th>Vendor Name</th>
                <th>Address</th>
                <th>PIC</th>
                <th>Trx Date</th>
                <th>Created By</th>
                <th>Created Date</th>
                <th>Actions</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import axios from axios

export default {
    data: () => ({
        trx: [],
    }),
    computed: {
        ...mapGetters({
            data: "useData/transactions"
        })
    },
    methods: {
        ...mapActions({
            getTransactions: "useData/getTransactions"
        }),
        getData() {
            axios.get('https://runs-dev-test.herokuapp.com/runs-dev-test/v1/get-all-transaction', {
                headers: {
                        "apiKey": "apiKeyDatabase",
                        "signature": "MTcwYmQ0OGY2MTRkNDVmZWIyZGFjZTU2YTBkNmQxYzYzZDgzMzUyODA5YzFmMGY0N2IzOWVkOWVkYjEwMmU2MQ==",
                        "timestamp": "1643015022"
                    }
            })
                .then((response) => {
                    console.log(response)
                })
        }
    },
    created() {
        this.getData();
        //this.getTransactions();
    }
}
</script>