"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13677],{87668:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-543e159a",path:"/devices/E1842.html",title:"IKEA E1842 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1842 control via MQTT",description:"Integrate your IKEA E1842 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-01-31T22:24:43.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1842.md",git:{updatedTime:1650093785e3}}},26338:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const d=(0,a.uE)('<h1 id="ikea-e1842" tabindex="-1"><a class="header-anchor" href="#ikea-e1842" aria-hidden="true">#</a> IKEA E1842</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1842</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>KNYCKLAN receiver electronic water valve shut-off</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1842.jpg" alt="IKEA E1842"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the switch to Zigbee2MQTT by reseting the receiver. This is done by pressing the on and off buttons simultaneously for 5 seconds.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),o=(0,a.Uk)("This device supports OTA updates, for more information see "),r=(0,a.Uk)("OTA updates"),s=(0,a.Uk)("."),h=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),n={},c=(0,i(83744).Z)(n,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[o,(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[r])),_:1}),s]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);