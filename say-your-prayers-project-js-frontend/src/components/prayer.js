class Prayer {
  constructor(prayerJSON) {
    this.id = prayerJSON.id;
    this.title = prayerJSON.title;
    this.body = prayerJSON.body;
    this.outcome = prayerJSON.outcome;
    this.amens = prayerJSON.amens;
    this.user_id = prayerJSON.user_id;
  }

  renderLi() {
    return `<li><div>Title: ${prayer.title}</div><div>Prayer: ${prayer.body}</div><div><input type="submit" value="Amen" class="add-amen-button"/> ${prayer.amens}</div><div>Outcome: ${prayer.outcome}</div><input type="submit" value="Add Outcome" class="add-outcome-button"/></li>`
  }
}
