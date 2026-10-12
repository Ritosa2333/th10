import assert from 'node:assert/strict';
import {defaults,fields,normalizePractice} from '../th10_web/sdl-runtime/practice-config.mjs';
import {sections} from '../th10_web/sdl-runtime/practice-sections.mjs';
assert(fields.length > 0);
assert(sections.length > 0);
assert.equal([...new Set(sections.map(section=>section.id))].length,sections.length);
for(const section of sections){
 assert(section.id>0&&section.id<10000);
 assert(section.stage>=0&&section.stage<=6);
 assert.equal(normalizePractice({stage:section.stage,section:section.id}).section,section.id);
 assert.equal(section.names.length,5);
}
assert.equal(normalizePractice({stage:0,section:sections.find(section=>section.stage===1).id}).section,0);
assert.equal(normalizePractice({stage:3,section:10406}).section,10406);
assert.equal(normalizePractice({stage:3,section:10409}).section,0);
assert.deepEqual(normalizePractice({faith:19,score:19,life:99,power:999,faith_bar:999,st6_boss9_spd:999,real_bullet_sprite:'x'}),{...defaults,faith:10,score:10,life:9,power:100,faith_bar:130,st6_boss9_spd:160,real_bullet_sprite:false});
assert.equal(normalizePractice({faith:-20000}).faith,0);
console.log(JSON.stringify({passed:true,sections:sections.length,fields:fields.length,scope:'practice configuration behavior'}));
