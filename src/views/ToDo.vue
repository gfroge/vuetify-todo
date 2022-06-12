<template>
  <div style="min-height: 100vh" :class="width < 600 ? 'pa-0' : 'pa-6 pt-0'">
    <div :class="width < 600 ? 'container form d-block' : 'container form '">
      <div start>
        <v-textarea
          v-model="newTask.title"
          label="todo title:"
          rows="1"
          :class="width < 600 ? 'pa-0' : 'pa-6 pb-0 pr-0'"
          no-resize
          auto-grow
          density="compact"
          hide-details
          clearable
          color="#FF3B3B"
          bg-color="#FFEBEE"
        ></v-textarea>
        <v-textarea
          v-model="newTask.subtitle"
          label="todo descripion:"
          rows="2"
          :class="width < 600 ? 'pa-0' : 'pl-6'"
          no-resize
          auto-grow
          density="compact"
          hide-details
          clearable
          color="#FF3B3B"
          bg-color="#FFEBEE"
        ></v-textarea>
      </div>
      <div :class="width < 600 ? 'pa-0 remove' : 'remove pr-6 pl-2'" end>
        <v-btn
          variant="text"
          color="primary"
          icon="mdi-plus"
          size="x-large"
          @click="createTask"
        ></v-btn>
      </div>
    </div>

    <v-list select-strategy="multiple">
      <div class="container" v-for="task in tasks" :key="task.id">
        <v-list-item :class="{ 'bg-red-lighten-5': task.done }">
          <template v-slot:default>
            <v-list-item-avatar start>
              <v-checkbox
                color="primary"
                :model-value="task.done"
                hide-details
                @click="completeTask(task.id)"
              ></v-checkbox>
            </v-list-item-avatar>

            <v-list-item-header
              :class="{
                'text-disabled': task.done,
                'text-disabled text-decoration-line-through': task.removed,
              }"
            >
              <v-list-item-title>{{
                makeShorter(task.title)
              }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ makeShorter(task.subtitle) }}
              </v-list-item-subtitle>
            </v-list-item-header>

            <v-list-item-avatar end>
              <v-btn
                variant="text"
                color="grey lighten-1"
                icon="mdi-delete-outline"
                @click="removeTask(task)"
              ></v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <v-snackbar location="center" timeout="3000" color="primary" v-model="snackbar">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="primary" variant="text" @click="undoRemove"> Undo </v-btn>
        <v-btn
          color="bg-red-lighten-5"
          variant="text"
          @click="snackbar = false"
        >
          x
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";

export default {
  setup() {
    const { width } = useDisplay();
    return { width };
  },
  data() {
    return {
      snackbar: false,
      text: `Task removed`,
      newTask: {
        title: "",
        subtitle: "",
      },
      tasks: [
        {
          id: 1,
          title: "Write my first todo",
          subtitle: "Just fill the form!",
          done: false,
          removed: false,
        },
        {
          id: 2,
          title: "Complete sample todos",
          subtitle: "Click on a checkbox to the left",
          done: false,
          removed: false,
        },
        {
          id: 3,
          title: "Try removing a todo",
          subtitle: "Click on a bin icon to the right",
          done: false,
          removed: false,
        },
      ],
    };
  },
  methods: {
    makeShorter(str) {
      if (str.length > 100) {
        let newStr = str.slice(0, str.length);
        newStr = newStr.slice(0, 100) + "...";
        return newStr;
      } else {
        return str;
      }
    },
    completeTask(id) {
      this.tasks.forEach((element) => {
        if (element.id === id) {
          element.done = !element.done;
        }
      });
    },
    removeTask(el) {
      this.snackbar = true;
      this.tasks.forEach((element) => {
        if (element.id === el.id) {
          element.removed = true;
        }
      });
      setTimeout(() => {
        this.tasks.forEach((element) => {
          if (element.removed == true) {
            this.tasks = this.tasks.filter((task) => task.id !== el.id);
          }
        });
      }, 3000);
    },
    undoRemove() {
      this.snackbar = false;
      this.tasks.forEach((element) => {
        element.removed = false;
      });
    },
    createTask() {
      if (
        this.newTask.title.trim() != "" ||
        this.newTask.subtitle.trim() != ""
      ) {
        this.tasks.push({
          id: Date.now(),
          title: this.newTask.title,
          subtitle: this.newTask.subtitle,
        });
      }
      this.newTask.title = this.newTask.subtitle = "";
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 1600px;
  margin: 0 auto;
}
.container.form {
  max-width: 600px;
  display: grid;
  grid-template-columns: 85% 15%;
}
.remove {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
