import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @add="add"></assignment-create>
            </assignment-list>
            
            <div v-show="!hideDiv ">
                <assignment-list @close="hideDiv = true" can-toggle :assignments="filters.completed" title="Completed"></assignment-list>
            </div>
            
        </section>
        `,
  data() {
    return {
      assignments: [],
      hideDiv: false,
    };
  },
  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
