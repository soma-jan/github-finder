class Github {
  constructor() {
    this.client_id = '9c81056513f99b07c83b';
    this.client_secret = '3e242900ce12bb8e83e2b7a1a61c703172c29a52';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
