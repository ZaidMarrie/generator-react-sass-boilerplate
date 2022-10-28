const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
	}

	welcome() {
		this.log("Generating react sass boilerplate...");
	}

	writing() {
		this.fs.copy(
      this.templatePath("public"), 
      this.destinationPath("public")
    );
    
		this.fs.copy(
      this.templatePath("src"), 
      this.destinationPath("src")
    );

		this.fs.copy(
      this.templatePath("_gitignore"), 
      this.destinationPath(".gitignore")
    );

		this.fs.copy(
      this.templatePath("package.json"), 
      this.destinationPath("package.json")
    );

		this.fs.copy(
			this.templatePath("package-lock.json"),
			this.destinationPath("package-lock.json")
		);

    this.fs.copy(
			this.templatePath("README.md"),
			this.destinationPath("README.md")
		);

    this.fs.copy(
			this.templatePath("vite.config.js"),
			this.destinationPath("vite.config.js")
		);
	}

	end() {
		this.log(" ");

		this.log(
			"Finished generating starter files!"
		);

		this.log(" ");
    
		this.log(
      "Run \'npm run dev\' to start the development server."
    );

    this.log(" ");

		this.log("Happy Coding!");
	}
};
