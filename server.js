app = require('express')(),
{ href, port } = new URL('http://localhost:1111')
app.use((req, res, next) => {
  var today = new Date(), day = today.getDay(), hour = today.getHours()
  if (day > 0 && day < 6 && hour >= 9 && hour <= 17) next()
  else res.status(500).type('text').send('the web application is only available during working hours (Monday to Friday,  from 9 to 17).')
})
for (page of list = [
  ['/', 'home page', {
    'welcome': 'Our vision of having a market leading platfrom quick win, for meeting with the client at 10:00. Drive awareness to increase engagement we need more paper to increase the pipelines race without a finish line, or drill down. Through the lens of engagement, for strategic high-level view. This is our north star design.',
    '🖹 what we do': 'Donuts in the break room re-inventing the wheel, so organic growth action item, but increase the pipelines player-coach. Prepare yourself to swim with the sharks. Per my previous email closing these latest prospects is like putting socks on an octopus win-win get six alpha pups in here for a focus group, but deploy to production, so 4-blocker.<br/>see more at <a href=/services>services<a>',
    '⛭ how we do it': 'Prioritize the low-hanging fruit waste of resources i’m sorry i replied to your emails after three weeks, but can the site go live tomorrow anyway?. To be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders who’s the goto on this job with the way forward , or product market fit, let’s prioritize the low-hanging fruit slipstream, yet corporate synergy, and work'
  }],
  ['/services', 'our services', {
    '⎚ ui design': 'Onward and upward, productize the deliverables and focus on the bottom line. Usabiltiy action item drill down we need evergreen content. Organic growth customer centric. Get buy-in moving the goalposts, donuts in the break room technologically savvy, organic growth we need to crystallize a plan. Win-win game-plan.',
    '🗃 app development': 'Collaboration through advanced powerpointless products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved. Get in the driver’s seat diversify kpis, yet move the needle, and the closest elephant is the most dangerous.',
    '': ['spicy buffalo chicken sandwich',
      'loaded chili cheese fries',
      'egg and cheese breakfast burrito',
      'water']
  }],
  ['/contact', 'contact us', {
    '🗪 let\'s talk about your next project': 'We need a paradigm shift nobody’s fault it could have been managed better. Take five, punch the tree, and come back in here with a clear head the horse is out of the barn crisp ppt, yet i need to go to another meeting, yet all hands on deck. Downselect we need to follow protocol, yet forcing function win-win we need distributors to evangelize the new line to local markets.',
    'email ': 'contact@example.com',
    'phone ': '+000999888777',
    'address ': '37th street, men ghadi'
  }],
]) app.get(page[0], ((path, title, content) => (req, res) => //wrapped in iife or else we lose scope and references
  res.send(`<!doctype html><html>
    <head>
      <link href='/layout.css' rel='stylesheet' />
      <title>gmc - ${title}</title>
    <body>
      <nav>${list.map(([key, val]) => `<a href='${key}' ${key == path ? `class=active` : ``}>${val}</a>`).join('')}</nav>
      <main>
        ${Object.entries(content).map(([h, p]) => `<h1>${h}</h1><t title='this is just a nonsense text placeholder'>${p instanceof Array ? `<ul>${p.map(o => `<li>${o}</li>`).join('')}</ul>` : `<p>${p}</p>`}</t>`).join('\n')}
      </main>`))(...page))
app.get('/layout.css', (req, res) => res.sendFile(__dirname + '/layout.css'))
app.listen(port, console.log('serving at ' + href))
