"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61171],{41741:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-5c81880c",path:"/devices/L441C_N4411C_NT4411C.html",title:"BTicino L441C/N4411C/NT4411C control via MQTT",lang:"en-US",frontmatter:{title:"BTicino L441C/N4411C/NT4411C control via MQTT",description:"Integrate your BTicino L441C/N4411C/NT4411C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-30T11:31:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Ballast_minimum_level (numeric)",slug:"ballast-minimum-level-numeric",children:[]},{level:3,title:"Ballast_maximum_level (numeric)",slug:"ballast-maximum-level-numeric",children:[]},{level:3,title:"Device_mode (binary)",slug:"device-mode-binary",children:[]},{level:3,title:"Permanent_led (binary)",slug:"permanent-led-binary",children:[]},{level:3,title:"Led_when_on (binary)",slug:"led-when-on-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/L441C_N4411C_NT4411C.md",git:{updatedTime:1650093785e3}}},95803:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var a=o(66252);const i=(0,a.uE)('<h1 id="bticino-l441c-n4411c-nt4411c" tabindex="-1"><a class="header-anchor" href="#bticino-l441c-n4411c-nt4411c" aria-hidden="true">#</a> BTicino L441C/N4411C/NT4411C</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>L441C/N4411C/NT4411C</td></tr><tr><td>Vendor</td><td>BTicino</td></tr><tr><td>Description</td><td>Dimmer switch with neutral</td></tr><tr><td>Exposes</td><td>light (state, brightness), ballast_minimum_level, ballast_maximum_level, device_mode, permanent_led, led_when_on, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/L441C-N4411C-NT4411C.jpg" alt="BTicino L441C/N4411C/NT4411C"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),n=(0,a.Uk)("How to use device type specific configuration"),s=(0,a.uE)('<ul><li><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric" aria-hidden="true">#</a> Ballast_minimum_level (numeric)</h3><p>Specifies the minimum brightness value. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric" aria-hidden="true">#</a> Ballast_maximum_level (numeric)</h3><p>Specifies the maximum brightness value. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="device-mode-binary" tabindex="-1"><a class="header-anchor" href="#device-mode-binary" aria-hidden="true">#</a> Device_mode (binary)</h3><p>Allow the device to change brightness. Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. If value equals <code>dimmer_on</code> device_mode is ON, if <code>dimmer_off</code> OFF.</p><h3 id="permanent-led-binary" tabindex="-1"><a class="header-anchor" href="#permanent-led-binary" aria-hidden="true">#</a> Permanent_led (binary)</h3><p>Enable or disable the permanent blue LED. Value can be found in the published state on the <code>permanent_led</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;permanent_led&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;permanent_led&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> permanent_led is ON, if <code>OFF</code> OFF.</p><h3 id="led-when-on-binary" tabindex="-1"><a class="header-anchor" href="#led-when-on-binary" aria-hidden="true">#</a> Led_when_on (binary)</h3><p>Enables the LED when the light is on. Value can be found in the published state on the <code>led_when_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_when_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_when_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_when_on is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),d={},l=(0,o(83744).Z)(d,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[n])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);