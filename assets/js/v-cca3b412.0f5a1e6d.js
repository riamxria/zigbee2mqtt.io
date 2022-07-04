"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92328],{57214:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-cca3b412",path:"/devices/RTCGQ01LM.html",title:"Xiaomi RTCGQ01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCGQ01LM control via MQTT",description:"Integrate your Xiaomi RTCGQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: device stops sending messages/disconnects from network",slug:"troubleshooting-device-stops-sending-messages-disconnects-from-network",children:[]},{level:3,title:"Note about occupancy_timeout option",slug:"note-about-occupancy-timeout-option",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Power_outage_count (numeric)",slug:"power-outage-count-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCGQ01LM.md",git:{updatedTime:1656947595e3}}},45058:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-rtcgq01lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-rtcgq01lm" aria-hidden="true">#</a> Xiaomi RTCGQ01LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>RTCGQ01LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>MiJia human body movement sensor</td></tr><tr><td>Exposes</td><td>battery, occupancy, voltage, power_outage_count, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ01LM.jpg" alt="Xiaomi RTCGQ01LM"></td></tr><tr><td>White-label</td><td>Xiaomi YTC4041GL, Xiaomi YTC4004CN, Xiaomi YTC4016CN, Xiaomi ZHTZ02LM</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul>',8),n=(0,i.Uk)("More detailed information about this can be found "),c={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("here"),s=(0,i.Uk)("."),d=(0,i._)("h3",{id:"note-about-occupancy-timeout-option",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#note-about-occupancy-timeout-option","aria-hidden":"true"},"#"),(0,i.Uk)(" Note about "),(0,i._)("code",null,"occupancy_timeout"),(0,i.Uk)(" option")],-1),l=(0,i._)("code",null,"occupancy_timeout",-1),u=(0,i.Uk)(" should not be set to lower than 60 seconds. The reason is this: after detecting a motion the sensor ignores any movements for exactly 60 seconds. In case there are movements after this 60 seconds, a new message ("),h=(0,i._)("code",null,"occupancy: true",-1),p=(0,i.Uk)(") will be sent and the sensor will go to sleep for another minute, and so on. Therefore, in order to sustain "),m=(0,i._)("code",null,"occupancy: true",-1),g=(0,i.Uk)(", you need a reasonable window after this 60s sleep to determine continued occupancy. This is expected behaviour (see "),b={href:"https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973",target:"_blank",rel:"noopener noreferrer"},y=(0,i.Uk)("#270"),f=(0,i.Uk)("). To work around this, a "),v={href:"https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("hardware modification"),k=(0,i.Uk)(" is needed."),T=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),_=(0,i.Uk)("How to use device type specific configuration"),x=(0,i.uE)('<ul><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power_outage_count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),q={},L=(0,o(83744).Z)(q,[["render",function(e,t){const o=(0,i.up)("OutboundLink"),q=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[n,(0,i._)("a",c,[r,(0,i.Wm)(o)]),s]),d,(0,i._)("p",null,[l,u,h,p,m,g,(0,i._)("a",b,[y,(0,i.Wm)(o)]),f,(0,i._)("a",v,[w,(0,i.Wm)(o)]),k]),T,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(q,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[_])),_:1})])]),x],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);