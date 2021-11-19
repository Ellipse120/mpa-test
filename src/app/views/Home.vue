<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>This is an app page</h1>

    <Toast />

    <Button label="Click Me" @click="showToast" />

    <div class="card">
<!--      <SpeedDial :model="items" direction="up" />-->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

export default {
  name: 'Home',
  setup() {
    const toast = useToast();

    toast.add({ severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000 });

    const items = ref([
      {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
          toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
          window.location.hash = "/fileupload"
        }
      },
      {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
          window.location.href = 'https://vuejs.org/'
        }
      }
    ]);

    const showToast = () => {
      toast.add({severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000});
      toast.add({severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000});
      toast.add({severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000});
      toast.add({ severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000 });
    }

    return {
      items,
      showToast
    }
  }
}
</script>
