"use client";
import { Component } from "react";
import Navigation from "../Navigation/page";
import Head from "next/head";

class MyProject extends Component {
  x = 100;
  y = 100;
  food_x = 150;
  food_y = 150;
  Arr = [];
  score = 2;

  key_name = "none";
  state = { a: 0 };

  fun1 = (e) => {
    this.key_name = e.key;
    // alert(e.key);
  };

  food_collied() {
    if (
      this.x <= this.food_x + 10 &&
      this.x >= this.food_x - 10 &&
      this.y <= this.food_y + 10 &&
      this.y >= this.food_y - 10
    ) {
      return true;
    }
    return false;
  }
  snake_collied() {
    this.Arr.map((e) => {
      if (e[0] == this.x && e[1] == this.y) {
        this.score = 2;
        this.Arr = [];
      }
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.food_collied()) {
        this.food_x = Math.round(Math.random() * 300);
        this.food_y = Math.round(Math.random() * 300);
        this.score += 1;
      }

      if (this.Arr.length > this.score) {
        this.Arr.splice(0, 1);
      }

      this.Arr.push([this.x, this.y]);
      switch (this.key_name) {
        case "ArrowUp":
          this.y -= 10;
          break;
        case "ArrowDown":
          this.y += 10;
          break;
        case "ArrowLeft":
          this.x -= 10;
          break;
        case "ArrowRight":
          this.x += 10;
          break;
        case "w":
          this.y -= 10;
          break;
        case "s":
          this.y += 10;
          break;
        case "a":
          this.x -= 10;
          break;
        case "d":
          this.x += 10;
          break;
        default:
          break;
      }

      if (this.x > 380) {
        this.x = 0;
      }
      if (this.y > 380) {
        this.y = 0;
      }
      if (this.x < 0) {
        this.x = 382;
      }
      if (this.y < 0) {
        this.y = 382;
      }
      this.snake_collied();
      this.setState({ a: 0 });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5519598443177466"
            crossorigin="anonymous"
          ></script>
        </Head>
        <Navigation />
        <h1 className="text-7xl font-bold mr-4 text-center text-yellow-500">
          My Project
        </h1>

        <div className="text-3xl font-bold mt-4 justify-center flex text-yellow-500">
          Score: {this.score - 2}
        </div>
        <div className="flex justify-center">
          <input
            onKeyDown={this.fun1}
            autoFocus
            className="bg-green-500 hover:animate-pulse hover:cursor-default m-6"
            value="Press this to Start"
          />
        </div>
        <div className="flex justify-center pb-12">
          <div className="relative w-96 h-96 border-2 border-yellow-500 ">
            <div
              className="absolute w-2 h-2 border-2 border-blue-500 rounded-md bg-blue-500"
              style={{ left: this.x, top: this.y }}
              key="player"
            ></div>
            {this.Arr.map((e, index) => (
              <div
                className="absolute w-2 h-2 border-2 border-blue-300 rounded-md bg-blue-300"
                style={{ left: e[0], top: e[1] }}
                key={index}
              ></div>
            ))}
            <div
              className="absolute w-2 h-2 border-2 border-red-500 rounded-md bg-red-500"
              style={{ left: this.food_x, top: this.food_y }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

export default MyProject;
