const { createApp } = Vue;
createApp({
  data() {
    return {
      helloWorld: "Hello World!",
      cardMeta: [
        { bgColor: "#184366", color: "#ffffff" },
        { bgColor: "#e8b20f", color: "#2B2B2B" },
        { bgColor: "#0e987d", color: "#ffffff" },
        { bgColor: "#e95b37", color: "#1a1a1a" },
        { bgColor: "#5ab3c4", color: "#1a1a1a" },
        { bgColor: "#bababa", color: "1a1a1a" },
      ],
    };
  },
  created: function () {},
  methods: {},

  computed: {},
  template: `
	<div>
		Area
		<div class="card-area">
			<div class="card" v-for="meta in cardMeta" :style="{ 'background-color': meta.bgColor}" :style="{ 'color': meta.color  }">
				<h1>Title</h1>
				<h2>H2</h2>
				<h3>H3</h3>
				<p>Paragraph</p>
				<ul>
					<li>BG: {{meta.bgColor}}</li>
					<li>Color: {{meta.color}}</li>
				</ul>
			</div>
		</div>
	</div>
`,
}).mount("#app");
