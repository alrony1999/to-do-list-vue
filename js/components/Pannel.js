export default {
  template: `<div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
        <h2 class="font-bold">
            <slot v-if="$slots.heading" name="heading" />
        </h2>
        <slot/>
      </div>`,
  props: {
    heading: String,
  },
};
