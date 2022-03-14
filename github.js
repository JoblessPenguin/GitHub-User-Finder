class Github {
  constructor() {
    this.client_id = 'b1289f7a1ba4c4245ed4';
    this.client_secret = 'e0ccda75824de32260731ddd27170a4fa0bf9cac'
    this.repos_count = 5;
    this.repos_sort = 'Created: asc';
  }
async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


  const profile = await profileResponse.json();
  const repos =  await reposResponse.json();

  return {
    profile,
    repos
  }
}

}