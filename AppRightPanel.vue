<template>
    <div class="layout-rightpanel" @click="$emit('right-panel-click', $event)">
        <div class="rightpanel-wrapper">
            <div class="section-tasks today">
                <h5>Your Tasks Today</h5>
                <ul>
                    <li>
                        <Checkbox :binary="true" v-model="checked1"></Checkbox>
                        <div class="task" :class="{'done':checked1}">
                            <h6>Sales reports</h6>
                            <span>Today</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked2"></Checkbox>
                        <div class="task" :class="{'done':checked2}">
                            <h6>Pay invoices</h6>
                            <span>Today</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked3"></Checkbox>
                        <div class="task" :class="{'done':checked3}">
                            <h6>Dinner with Tony</h6>
                            <span>Today, 22:36</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked4"></Checkbox>
                        <div class="task" :class="{'done':checked4}">
                            <h6>Client meeting</h6>
                            <span>Today</span>
                        </div>
                    </li>
                </ul>
            </div>

            <hr/>

            <div class="section-tasks upcoming">
                <h5>Upcoming</h5>
                <ul>
                    <li>
                        <Checkbox :binary="true" v-model="checked5"></Checkbox>
                        <div class="task" :class="{'done':checked5}">
                            <h6>New representative meeting</h6>
                            <span>27 May</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked6"></Checkbox>
                        <div class="task" :class="{'done':checked6}">
                            <h6>Flight tickets</h6>
                            <span>28 May</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked7"></Checkbox>
                        <div class="task" :class="{'done':checked7}">
                            <h6>Generate charts</h6>
                            <span>29 May</span>
                        </div>
                    </li>
                    <li>
                        <Checkbox :binary="true" v-model="checked8"></Checkbox>
                        <div class="task" :class="{'done':checked8}">
                            <h6>Delete old files</h6>
                            <span>30 May</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['right-panel-click'],
    data() {
        return {
            checked1: true,
            checked2: true,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false
        }
    }
}
</script>