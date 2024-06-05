<template>
    <div>
        <h1>{{ statusData['10'].name }}</h1>
        <h3>{{ statusData['10'].title }}</h3>
        <div>
            <div v-for="items,index in statusData['10'].q1" :key="index">
                <label>
                    <input type="radio" 
                    @input="valueTrigger(index)"
                    v-model="statusFinal.value" :value="items.name"/>
                    {{items.name}} 
                    <div v-if=" items.sub!==false  && statusFinal.value===items.name ">
                    <p>{{  }}</p>
                    <div v-for="subItems,subIndex in items.sub" :key="subIndex" class="m-1">
                        
                        <p>{{ subItems.name }}</p>
                        
                        <div v-for="minSubItems,minSubIndex in subItems.sub" ::key="minSubItems" class="m-1">
                                <label>
                                <input type="radio"  v-model="subFinal" :value="minSubItems.name"/>
                                    {{minSubItems.name}}
                                </label>
                        </div>
                    </div>
                    </div>
                </label>
            </div>
            <p>Please select the required option below: </p>
            <div>
                <div v-if="statusFinal.stage === 'b' || statusFinal.stage === '' || statusFinal.stage === ' '">
                    
                </div>
                <div class="container" v-else v-for="(item, index) in statusData['10']['fields'][statusFinal.stage]['fields']" :key="index">
                    <div class="row m-3">
                        <div class="col-4">
                            <label>
                                {{item.name}}  
                            </label>
                        </div>

                        <div class="col-8" v-if="item.type === 'text'">
                            <div class="form-floating">
                            <textarea class="form-control" placeholder="Enter remarks here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Enter Remarks here</label>
                            </div>
                        </div>

                        <div class="col-8" v-else-if="item.name === 'Inspection done at'">
                            <div class="row">
                                <div v-for="(val, key) in item.dropdown" class="col-4" :key="key">
                                <select class="form-select" aria-label="Default select example" v-model="selectedOption">
                                    <option selected disabled value="">Select an option</option>
                                    <option v-for="(value, key) in val" :key="key" :value="key">{{ value }}</option>
                                </select>
                            </div>
                            </div>
                        </div>

                        <div class="col-8" v-else-if="item.type === 'datetime'">
                            <div class="row">
                                <div class="col-4">
                                <input type="date" class="form-control">
                                </div>
                                <div class="col-4">
                                    <input type="time" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-8" v-else>
                            <div class="input-group mb-3">
                                <span class="input-group-text">&#8377;</span>
                                <input type="number" class="form-control" aria-label="Username">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column align-items-center justify-content-center bg-info bg-gradient">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <input class="m-1 bg-danger text-bg-success" type="button" value="Submit Status">
            </div>


        </div>
    </div>
</template>


<script>
import Statusdata from '../status_data.js'
console.log(Statusdata)

export default {
    name: 'Status',
    data() {
        return {
            selectedOption: '',
            statusData: null,
            statusFinal:{
                stage:'',
                value:''
            },
            subFinal:'',
        }
    },
    created() {
        this.loadStatusData();
    },
    
    methods: {

        loadStatusData() {
        this.statusData = Statusdata[0];
        },

        valueTrigger(index) {
        this.statusFinal.stage = index;
        }
    },

}

</script>