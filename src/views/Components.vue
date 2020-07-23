<template>
  <div class="components">

    <h1>Components</h1>
    <LoadShape msg="LoadShape"/>


    <div>
      <div>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
        </b-button-group>
      </div>
      <div class="mt-3">
        <b-button-group>
          <b-button variant="success">Success</b-button>
          <b-button variant="info">Info</b-button>
          <b-button variant="warning">Warning</b-button>
        </b-button-group>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import LoadShape from '@/components/LoadShape.vue'

export default {
  name: 'Home',
  components: {
    LoadShape
  }
}
</script>
