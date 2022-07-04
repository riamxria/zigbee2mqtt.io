"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10313],{32471:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-045567de",path:"/devices/MIR-HE200-TY_fall.html",title:"TuYa MIR-HE200-TY_fall control via MQTT",lang:"en-US",frontmatter:{title:"TuYa MIR-HE200-TY_fall control via MQTT",description:"Integrate your TuYa MIR-HE200-TY_fall via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Motion_speed (numeric)",slug:"motion-speed-numeric",children:[]},{level:3,title:"Motion_direction (enum)",slug:"motion-direction-enum",children:[]},{level:3,title:"Radar_sensitivity (numeric)",slug:"radar-sensitivity-numeric",children:[]},{level:3,title:"Radar_scene (enum)",slug:"radar-scene-enum",children:[]},{level:3,title:"Tumble_switch (enum)",slug:"tumble-switch-enum",children:[]},{level:3,title:"Fall_sensitivity (numeric)",slug:"fall-sensitivity-numeric",children:[]},{level:3,title:"Tumble_alarm_time (numeric)",slug:"tumble-alarm-time-numeric",children:[]},{level:3,title:"Fall_down_status (enum)",slug:"fall-down-status-enum",children:[]},{level:3,title:"Static_dwell_alarm (text)",slug:"static-dwell-alarm-text",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MIR-HE200-TY_fall.md",git:{updatedTime:1656947595e3}}},7619:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const i=(0,a(66252).uE)('<h1 id="tuya-mir-he200-ty-fall" tabindex="-1"><a class="header-anchor" href="#tuya-mir-he200-ty-fall" aria-hidden="true">#</a> TuYa MIR-HE200-TY_fall</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MIR-HE200-TY_fall</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Human presence sensor with fall function</td></tr><tr><td>Exposes</td><td>illuminance_lux, presence, occupancy, motion_speed, motion_direction, radar_sensitivity, radar_scene, tumble_switch, fall_sensitivity, tumble_alarm_time, fall_down_status, static_dwell_alarm, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MIR-HE200-TY_fall.jpg" alt="TuYa MIR-HE200-TY_fall"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="motion-speed-numeric" tabindex="-1"><a class="header-anchor" href="#motion-speed-numeric" aria-hidden="true">#</a> Motion_speed (numeric)</h3><p>Speed of movement. Value can be found in the published state on the <code>motion_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-direction-enum" tabindex="-1"><a class="header-anchor" href="#motion-direction-enum" aria-hidden="true">#</a> Motion_direction (enum)</h3><p>direction of movement from the point of view of the radar. Value can be found in the published state on the <code>motion_direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>standing_still</code>, <code>moving_forward</code>, <code>moving_backward</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar_sensitivity (numeric)</h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="radar-scene-enum" tabindex="-1"><a class="header-anchor" href="#radar-scene-enum" aria-hidden="true">#</a> Radar_scene (enum)</h3><p>presets for sensitivity for presence and movement. Value can be found in the published state on the <code>radar_scene</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_scene&quot;: NEW_VALUE}</code>. The possible values are: <code>default</code>, <code>area</code>, <code>toilet</code>, <code>bedroom</code>, <code>parlour</code>, <code>office</code>, <code>hotel</code>.</p><h3 id="tumble-switch-enum" tabindex="-1"><a class="header-anchor" href="#tumble-switch-enum" aria-hidden="true">#</a> Tumble_switch (enum)</h3><p>Tumble status switch. Value can be found in the published state on the <code>tumble_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="fall-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#fall-sensitivity-numeric" aria-hidden="true">#</a> Fall_sensitivity (numeric)</h3><p>fall sensitivity of the radar. Value can be found in the published state on the <code>fall_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fall_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="tumble-alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#tumble-alarm-time-numeric" aria-hidden="true">#</a> Tumble_alarm_time (numeric)</h3><p>tumble alarm time. Value can be found in the published state on the <code>tumble_alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>min</code>.</p><h3 id="fall-down-status-enum" tabindex="-1"><a class="header-anchor" href="#fall-down-status-enum" aria-hidden="true">#</a> Fall_down_status (enum)</h3><p>fall down status. Value can be found in the published state on the <code>fall_down_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>maybe_fall</code>, <code>fall</code>.</p><h3 id="static-dwell-alarm-text" tabindex="-1"><a class="header-anchor" href="#static-dwell-alarm-text" aria-hidden="true">#</a> Static_dwell_alarm (text)</h3><p>static dwell alarm. Value can be found in the published state on the <code>static_dwell_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),d={},o=(0,a(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);