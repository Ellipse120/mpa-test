<template>
  <div class="home">
    <h1>This is an other page</h1>

    <Toast />

    <Button label="Submit" @click="showToast" />
    <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
    <Button label="Link" class="p-button-link" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useToast } from "primevue/usetoast";

export default {
  name: 'Home',
  setup () {
    const toast = useToast();

    toast.add({ severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000 });

    onMounted(() => {
      toast.add({ severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000 });
    })

    const showToast = () => {
      toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000});
      toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000});
      toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000});
      toast.add({ severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000 });
    }

    return {
      showToast
    }
  }
}
</script>
