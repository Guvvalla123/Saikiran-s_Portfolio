import { Section } from '../shell/Section.jsx'
import { CardShell } from '../ui/CardShell.jsx'
import { skillCategories, skillsSectionIntro } from '../../data/skills.js'
import { getSkillSiIcon, SKILL_SI_ICON_SIZE } from '../../lib/skillIcons'
import { cn, ds } from '../../ds/classNames.js'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      surface="wash"
      kicker="Skills"
      title="Tools I reach for daily."
      intro={skillsSectionIntro}
    >
      <div className={ds.gridTwoUp}>
        {skillCategories.map((cat) => (
          <CardShell key={cat.id}>
            <h3 className={ds.kickerNeutral}>{cat.title}</h3>
            <ul className={ds.skillItemList}>
              {cat.items.map((item, index) => {
                const isTop = index < 3
                const SiIcon = getSkillSiIcon(item)
                return (
                  <li
                    key={item}
                    className={cn(ds.skillItem, isTop && ds.skillItemHighlight)}
                  >
                    <span className={ds.skillItemIconSlot} aria-hidden>
                      {SiIcon ? (
                        <SiIcon
                          size={SKILL_SI_ICON_SIZE}
                          className={ds.skillItemSi}
                        />
                      ) : null}
                    </span>
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </CardShell>
        ))}
      </div>
    </Section>
  )
}
