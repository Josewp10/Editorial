<template>
  <div>

    <br><br>

    <b-container class="bv-example-row mb-3">
  <b-row cols="2">
    <b-col> </b-col>
    <b-col> 
      <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Consulte obras..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    </b-col>
    <b-col>Column</b-col>
    <b-col>Column</b-col>
  </b-row>
</b-container>
      
      
     
     
  </div>
</template>