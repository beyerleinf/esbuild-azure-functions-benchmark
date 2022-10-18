import { build } from 'esbuild-azure-functions';

await build({
  project: '.',
  esbuildOptions: {
    outdir: 'dist-esbuild',
  },
});
