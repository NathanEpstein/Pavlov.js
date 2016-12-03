Pavlov.js : src/*.cpp
	mkdir lib
	emcc --bind -o lib/Pavlov.js src/*.cpp
