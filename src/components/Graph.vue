<template>
    <div>
        <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource"
        ></fusioncharts>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        props: ['apiurl'],

        data: () => ({
            width: '100%',
            height: '300',
            type: 'line',
            dataFormat: 'json',
            api_url: process.env.VUE_APP_API_URL,
            dataSource: {
                "chart": {
                    "bgColor": "FFFFFF",
                    "bgAlpha": "50",
                    "borderColor": "FFFFFF",
                    "borderThickness": "1",
                    "borderAlpha": "80",
                    "showBorder": "0",
                    "theme": "candy"
                },
                "data": []
            }
        }),

        created() {
            this.getApiData();
        },

        methods: {
            getApiData() {
                axios.get(`${this.api_url}/${this.apiurl}`)
                .then(({ data }) => {
                    let dataSource = [];

                    data.data.forEach((info, i) => {
                        dataSource.push({
                            label: data.labels[i],
                            value: info
                        });
                    });

                    this.dataSource.data = dataSource
                })
                .catch((err) => { console.error(err) })
            }
        }
    }
</script>