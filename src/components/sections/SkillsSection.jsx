import { Section } from '../shell/Section.jsx'
import { CardShell } from '../ui/CardShell.jsx'
import { skillCategories } from '../../data/skills.js'
import { ds } from '../../ds/classNames.js'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      surface="wash"
      kicker="Skills"
      title="Tools I reach for daily."
      intro="Grouped from production work: frontend surfaces, API and auth layers, data modeling, and the glue in between."
    >
      <div className={ds.gridTwoUp}>
        {skillCategories.map((cat) => (
          <CardShell key={cat.id}>
            <h3 className={ds.kickerNeutral}>{cat.title}</h3>
            <ul className={ds.chipList}>
              {cat.items.map((item) => (
                <li key={item} className={ds.chip}>
                  {item}
                </li>
              ))}
            </ul>
          </CardShell>
        ))}
      </div>
    </Section>
  )
}
