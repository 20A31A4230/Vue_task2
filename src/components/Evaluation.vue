<template>
    <div>
        <!-- Accoridan Type -->
        <h2 style=" text-align: center; background-color: black; color: white; padding: 10px;">Evaluation Page</h2>
        <div v-for="val,key in data" class="accordion" :id="`accordionExample`">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#collapse_${key}`" aria-expanded="true" :aria-controls="`collapse_${key}`">
                        {{ val.group }}
                    </button>
                </h2>
                <div :id="`collapse_${key}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div v-for="v,k in val.categories" class="accordion-body">
                        <button @click="toggle(v.id)">{{ v.name }}</button>
                        <div v-if="show_data == v.id && this.show">
                            <div v-if="val.group == 'Accidental Details'">
                                <textarea name="accidental details" v-model="v.remarks"
                                    placeholder="Enter accidental Details" style="width:100%"></textarea>
                            </div>
                            <table v-else class="table table-border">

                                <tr class="table-info">
                                    <td>Part</td>
                                    <td>Select </td>
                                    <td>Options</td>
                                    <td>RF Cost</td>
                                    <td>Remarks</td>
                                </tr>

                                <tr v-for="item,ikey in v.items" :key="ikey">
                                    <td>{{item.name}}</td>

                                    <td>
                                        <label><input type="radio" v-model="item.selected" value="OK"
                                                :name="item['part-id']"> Ok</label>
                                        &nbsp;
                                        <label> <input type="radio" v-model="item.selected" value='notOK'
                                                :name="item['part-id']"> Not Ok</label>
                                    </td>

                                    <td>
                                        <div v-if="item.selected == 'OK'" v-for="val in item.ok">
                                            <input type="checkbox" v-model=val.selected>
                                            &nbsp;{{val.name}}
                                        </div>
                                        <div v-if="item.selected == 'notOK'" v-for="val in item.notok">
                                            <input type="checkbox" v-model=val.selected>&nbsp;{{val.name}}
                                        </div>
                                    </td>

                                    <td>
                                        <div v-if="item.selected == 'notOK'">
                                            <input type="text" placeholder="Repair Cost" class="m-3"
                                                v-model="item.rf_cost">
                                        </div>
                                    </td>

                                    <td>
                                        <div v-if="val.group == 'Tyres'">
                                            <div> <input type="range" class="form-range "
                                                 v-model="item['range']">&nbsp;<span
                                                    class="fs-9 text-success">{{item['range']}}</span><br>
                                            </div>
                                            <input type="number" class="m-3" placeholder="Tyre Depth(Ex.3.3)"
                                                v-model="item.tyreDepth"
                                                @input="item.isvalid = ( item.tyreDepth > 7)"><br>
                                            <span v-if="item.isvalid" class="fs-6 text-danger">Please
                                                choose
                                                the number with in range(0-7)</span>
                                        </div>
                                        <div v-else>
                                            <textarea name="remarks" placeholder="Remarks"></textarea>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../template.js';

export default {
    name: 'Evaluation',
    data() {
        return {
            show: false,
            show_data: undefined,
            value: 50,
            data: data,
            "status": {}
        }
    },
    methods: {
        toggle: function (k) {
            if (k == this.show_data) {
                this.show = false;
                this.show_data = undefined;
                return
            }
            this.show_data = k;
            this.show = true;
        },
    },
}

</script>
