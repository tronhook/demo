<template>
  <div id="app" style="background-color: #f7f7f8;">
<div class="ui container">
    <div class="ui grid">
      <div class="column right aligned">
        <a href="https://github.com/tronhook/tronhook" rel="noreferrer noopener" target="_blank" style="margin-right:10px;"><i class="ui large github icon"></i>Github</a>
        <a href="https://tronhook.github.io/docs" rel="noreferrer noopener" target="_blank"><i class="ui large book icon"></i>Documentation </a>
      </div>
    </div>
</div>
<div class="ui segment container">
<h1 class="ui dividing header"><small>TRONHOOK DEMO</small></h1>
<div class="info">
<p>Here are some demo of usecases that TronHook can help with. <em><b>It is not only limited to these usecase</b></em>, you can write any rule you want that match your requirements.</p>
<p>This demo is focusing on the notification feature but TronHook is not just a notification tool, other features are also available (data sync into db, data processing ...), it aims to simplify data integration between Tron and your (d)App.</p>
<p>If you want to have more details about how to write rules, you can check the documentation.</p>
<p>To start receiving notifications, choose one or multiple rules and save them. TronHook node will start sending notifications via websocket to this page !</p>
<p><i class="ui circle info icon"></i> Note that this demo checks the matching rules only for the latest blocks of Mainnet, but you can also get notifications for previous blocks or a specific range of blocks, or replay the entire blockchain.</p>
</div>

<div class="ui info message">
  Rules are deleted every 30min (no matter when you created them) on this demo server, if all rules suddenly disapear and your are not receiving notifications anymore it might be for this reason.
 In that case, please reload the page and add your rules again
</div>
    <div class="ui vertical stripe segment" style="background: #f5f5f5;opacity: 0.7;">
        <div class="ui stackable four column centered grid container">
        <div class="ui center aligned column">
          <div class="ui small orange statistic">
            <div class="value">
              <small>{{notificationCount}}</small>
            </div>
            <div class="label">
              Notifications
            </div>
          </div>
        </div>
        <div class="ui center aligned column">
          <div class="ui small green statistic">
            <div class="value">
              <small>{{stats.rulesCount}}</small>
            </div>
            <div class="label">
              Rules
            </div>
          </div>
        </div>
        <div class="ui center aligned column">
          <div class="ui small grey statistic">
            <div class="value">
              <small>{{stats.lastProcessedBlock}}</small>
            </div>
            <div class="label">
              Last processed block
            </div>
          </div>
        </div>
  </div>
  </div>
  <br>
<div class="ui grid">
  <div class="four wide column">
    <b>RULE EXAMPLES</b>
    <div class="ui vertical fluid tabular menu" >
      <a class="item active" data-tab="track_token">
        Track transactions of a token
      </a>
      <a class="item" data-tab="confirm_transaction">
        Confirmation of a transaction
      </a>
      <a class="item " data-tab="triggers">
        Track triggers of a specific contract
      </a>
      <a class="item " data-tab="votes">
        Track votes for specific address
      </a>
      <a class="item " data-tab="custom_rule">
        Custom rule
      </a>
    </div>
  </div>
  <div class="twelve wide stretched column">
    <div class="ui segment" >
      <!--TRACK TOKEN-->
      <div class="ui active tab" data-tab="track_token">
          <p><i class="ui circle info icon"></i>Receive a notification every time a transaction occurs with a specific token</p>
        <div class="ui form">
          <div class="field">
            <label>Token id</label>
            <input type="text" v-model="tokenId">
          </div>
          <div class="field">
            <label>Rule specification</label>
            <vue-json-pretty :path="'res'" :data="rules.track_token"></vue-json-pretty>
          </div>
          <button class="ui green button right floated" type="submit" @click="addRule('track_token')" :class="{'disabled':this.rulesState.track_token.exists}">Add rule</button>
          <button class="ui red button right floated" type="submit" @click="removeRule('track_token')" v-show="this.rulesState.track_token.exists">Remove rule</button>
        </div>
      </div>
      <!--CONFIRM TRANSACTION-->
      <div class="ui tab" data-tab="confirm_transaction">
          <p><i class="ui circle info icon"></i>Receive a notification only once a specific transaction is confirmed</p>
        <div class="ui form">
          <div class="field">
            <label>Transaction hash</label>
            <input type="text" v-model="confirmationHash">
          </div>
          <div class="field">
            <label>Rule specification</label>
            <vue-json-pretty :path="'res'" :data="rules.confirm_transaction"></vue-json-pretty>
          </div>
          <button class="ui green button right floated" type="submit" @click="addRule('confirm_transaction')" :class="{'disabled':this.rulesState.confirm_transaction.exists}">Add rule</button>
          <button class="ui red button right floated" type="submit" @click="removeRule('confirm_transaction')" v-show="this.rulesState.confirm_transaction.exists">Remove rule</button>
        </div>
      </div>
      <!--TRACK TRIGGERS-->
      <div class="ui tab" data-tab="triggers">
          <p><i class="ui circle info icon"></i>Receive a notification every time a specific contract is triggered</p>
        <div class="ui form">
          <div class="field">
            <label>Contract address</label>
            <input type="text" v-model="triggerContractAddress">
          </div>
          <div class="field">
            <label>Rule specification</label>
            <vue-json-pretty :path="'res'" :data="rules.track_triggers"></vue-json-pretty>
          </div>
          <button class="ui green button right floated" type="submit" @click="addRule('track_triggers')" :class="{'disabled':this.rulesState.track_triggers.exists}">Add rule</button>
          <button class="ui red button right floated" type="submit" @click="removeRule('track_triggers')" v-show="this.rulesState.track_triggers.exists">Remove rule</button>
        </div>
      </div>
      <!--TRACK Votes-->
      <div class="ui tab" data-tab="votes">
          <p><i class="ui circle info icon"></i>Receive a notification on votes for a specific address</p>
        <div class="ui form">
          <div class="field">
            <label>Vote address</label>
            <input type="text" v-model="voteToAddress">
          </div>
          <div class="field">
            <label>Rule specification</label>
            <vue-json-pretty :path="'res'" :data="rules.track_votes"></vue-json-pretty>
          </div>
          <button class="ui green button right floated" type="submit" @click="addRule('track_votes')" :class="{'disabled':this.rulesState.track_votes.exists}">Add rule</button>
          <button class="ui red button right floated" type="submit" @click="removeRule('track_votes')" v-show="this.rulesState.track_votes.exists">Remove rule</button>
        </div>
      </div>
      <!--CUSTOM RULE-->
      <div class="ui tab" data-tab="custom_rule">
          <p><i class="ui circle info icon"></i>Write and test your own rule</p>
        <div class="ui form">
          <div class="field">
            <label>Rule</label>
            <input type="text" v-model="customRule">
          </div>
          <div class="field">
            <label>Rule specification</label>
            <p>This rule will be executed only once to prevent any abuse on this demo server</p>
            <vue-json-pretty :path="'res'" :data="rules.custom_rule"></vue-json-pretty>
            <p style="color:red;" v-show="customRuleError!=null">Error: {{customRuleError}}</p>
          </div>
          <button class="ui green button right floated" type="submit" @click="addRule('custom_rule')" :class="{'disabled':this.rulesState.custom_rule.exists}">Add rule</button>
          <button class="ui red button right floated" type="submit" @click="removeRule('custom_rule')" v-show="this.rulesState.custom_rule.exists">Remove rule</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="ui segment container">
  <h2  class="ui dividing header"><a id="notifications"></a><small>Received notifications</small></h2>
  <p><i class="ui circle info icon"></i> Click a a row to get the message detail</p>
  <table id="table_id" class="ui fixed selectable orange table" width="100%">
      <thead>
          <tr>
              <th class="two wide">#</th>
              <th class="two wide">Rule Id</th>
              <th class="ten wide">Message</th>
          </tr>
      </thead>
      <tbody>
      </tbody>
  </table>
</div>
<div class="ui modal">
  <div class="header">Message detail</div>
  <div class="scrolling content">
    <vue-json-pretty :data="notificationDetail"></vue-json-pretty>
  </div>
</div>
  </div>
</template>

<script>
import Noty from 'noty'
import 'noty/lib/themes/mint.css'
import $ from 'jquery'
import 'semantic-ui/dist/semantic.css'
import 'semantic-ui/dist/components/tab'
import 'semantic-ui/dist/components/modal'
import 'semantic-ui/dist/components/transition'
import 'semantic-ui/dist/components/dimmer'
import 'noty/lib/noty.css'
import VueJsonPretty from 'vue-json-pretty'
import axios from 'axios'
import Vue from 'vue'
import VueTable from 'vuetable-2'
import 'datatables.net'
import 'datatables.net-se'
import Conf from './config'

Vue.use(VueTable)
Noty.setMaxVisible(10)
var ws = new WebSocket(Conf.ws)
export default {
  name: 'App',
  components: {
    VueJsonPretty
  },
  data () {
    return {
      rulesState: {},
      notificationDetail: {},
      notifications: [],
      customRuleError: null,
      voteToAddress: 'TGzz8gjYiYRqpfmDwnLxfgPuLVNmpCswVp',
      tokenId: 'SEED',
      confirmationHash: '',
      customRule: '',
      triggerContractAddress: 'TEEXEWrkMFKapSMJ6mErg39ELFKDqEs6w3',
      notificationCount: 0,
      stats: {
        rulesCount: 0,
        lastProcessedBlock: 0
      },
      session_id: `${Math.random()}`
    }
  },
  computed: {
    rules () {
      return {
        'track_token': {
          'id': 'track_token',
          'context': 'transaction',
          'rule': `type==2 and contract.asset=='${this.tokenId}'`,
          'repeat': 'always'
        },
        'confirm_transaction': {
          'id': 'confirm_transaction',
          'context': 'transaction',
          'rule': `confirmed==true and hash=='${this.confirmationHash}'`,
          'repeat': 'once'
        },
        'track_triggers': {
          'id': 'track_trigger',
          'context': 'transaction',
          'rule': `type==31 and contract.contractAddress=='${this.triggerContractAddress}'`,
          'repeat': 'always'
        },
        'track_votes': {
          'id': 'track_votes',
          'context': 'transaction',
          'rule': `type==4 and contract.hasVoteTo('${this.voteToAddress}')`,
          'repeat': 'always'
        },
        'custom_rule': {
          'id': 'custom_rule',
          'context': 'transaction',
          'rule': `${this.customRule}`,
          'repeat': 'once'
        }
      }
    }
  },
  methods: {
    showMessageDetail (data) {
      let num = data[0]
      this.notificationDetail = this.notifications[num]
      $('.modal').modal('show')
    },
    checkRules () {
      // check if rules exists every 5s
      const rules = Object.keys(this.rules)
      for (let i = 0; i < rules.length; i++) {
        const ruleId = rules[i]
        const rule = this.rules[ruleId]
        let promises = []
        // let rule = rules[ruleId]
        promises.push(this.getRule(ruleId).then((res) => {
          let exists = 'id' in res.data
          this.rulesState[ruleId] = {...rule, exists: exists}
        }))
      }
    },
    checkCustomRuleError () {
      this.getRule('custom_rule').then((res) => {
        if (res.data && res.data.error) {
          this.customRuleError = res.data.error
        } else {
          this.customRuleError = null
        }
      })
    },
    fetchStats () {
      const statsPromise = axios.get(`${Conf.api}/stats`)
      const rulesPromise = axios.get(`${Conf.api}/rules`)
      Promise.all([statsPromise, rulesPromise]).then((results) => {
        this.stats.lastProcessedBlock = results[0].data.lastProcessedBlock
        this.stats.rulesCount = 0
        let rules = results[1].data
        for (let i = 0; i < rules.length; i++) {
          const rule = rules[i]
          if (rule.id.indexOf(this.session_id) !== -1) {
            this.stats.rulesCount++
          }
        }
      })
    },
    addRule (id) {
      const rules = this.rules
      let rule = {...rules[id], id: id + ':' + this.session_id}
      axios.post(`${Conf.api}/rule`, rule).then((data) => {
        new Noty({
          theme: 'mint',
          type: 'success',
          text: 'Rule successfully added !',
          timeout: 1000
        }).show()
        this.checkRules()
        this.fetchStats()
      })
    },
    removeRule (id) {
      axios.delete(`${Conf.api}/rule/${id}:${this.session_id}`).then(() => {
        new Noty({
          type: 'success',
          text: 'Rule removed !',
          timeout: 1000
        }).show()
      })
    },
    getRule (id) {
      return axios.get(`${Conf.api}/rule/${id}:${this.session_id}`)
    }

  },
  created () {
    this.rulesState = {...this.rules}
  },
  mounted () {
    // init tab
    $('.tabular.menu .item').tab()
    // init table
    let t = $('#table_id').DataTable({
      'order': [[ 0, 'desc' ]]
    })
    const showMessage = this.showMessageDetail
    t.on('click', 'tr', function () {
      showMessage(t.row(this).data())
    })
    // check rule status every 5s
    setInterval(() => {
      this.checkRules()
    }, 5000)
    setInterval(() => {
      this.fetchStats()
      this.checkCustomRuleError()
    }, 1000)
    // handle ws message
    ws.onmessage = (data) => {
      let message = JSON.parse(data.data)
      const rules = Object.keys(message)
      for (let i = 0; i < rules.length; i++) {
        const ruleId = rules[i]
        if (ruleId.indexOf(':') === -1) {
          continue
        }
        const ruleParts = ruleId.split(':')
        const ruleNamePart = ruleParts[0]
        const ruleSessionPart = ruleParts[1]
        if (ruleSessionPart === this.session_id) {
          this.notifications.push(message)
          const rule = message[ruleId]
          t.row.add([this.notificationCount, ruleNamePart, JSON.stringify(rule).substring(0, 150) + '...']).draw(false)
          this.notificationCount++
        }
      }
    }
    // remove rules on unload
    $(window).on('beforeunload', (e) => {
      Promise.all([
        this.removeRule('track_token'),
        this.removeRule('confirm_transaction'),
        this.removeRule('track_triggers')])
    })
  }
}
</script>

<style>
.info p{
  font-size: 16px;
}
</style>
