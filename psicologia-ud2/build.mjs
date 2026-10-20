import {build} from 'vite';
import {cpSync,readdirSync} from 'node:fs';
await build();
for(const entry of readdirSync('dist')) cpSync('dist/'+entry,entry,{recursive:true});
