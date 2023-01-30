<template>
  <div id="app">
    <div>
      <input type="file" ref="myfile" />
      <button @click="upload">Upload</button>
      <button @click="mostrar">Preview</button>
    </div>

    <object :data="url" width="200" height="400"></object>
  </div>
</template>

<script>
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ViewPDF from './components/ViewPDF.vue';

export default {
  name: 'App',
  data: () => {
    return {
      url: '',
    };
  },
  methods: {
    upload() {
      const storageRef = ref(storage, 'folder/myfile.pdf');
      uploadBytes(storageRef, this.$refs.myfile.files[0]).then((snapshot) => {
        console.log('foi pdf');
      });
    },
    async mostrar() {
      await getDownloadURL(ref(storage, 'folder/myfile.pdf')).then(
        (download_url) => (this.url = download_url)
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
