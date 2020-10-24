<template>
  <f7-page name="host">
    <f7-navbar title="Host Testseite" back-link="Back"></f7-navbar>

    <f7-block-title>Id: {{ id }}</f7-block-title>
    

      
 </f7-page>
</template>

<script>
export default {
  props: {
    id: String
  },
  mounted: function(){
    this.loadHost();
  },
  methods: {
    loadHost: function(){
      console.log(this.id);
    }
  }
}
</script>