const paragraphs = [
  `Dawn slid through the canopy like a whispered warning when Malik realized he was no longer alone. The lion padded into the clearing, mane ablaze with gold, shoulders rippling beneath a hide of scars. Malik was miles from his base camp, with damp matches, a spilled pack, and nothing in his hands but the vine-wrapped journal that had guided him across the Congo Basin. Yet even as the lion’s growl rumbled through the nettle air, Malik’s pulse steadied. Running meant turning himself into prey. He needed to stand, think, and bend the jungle to his will before the lion lunged.`,
  `He slid one foot backward, feeling for the roots and litter he had memorised while mapping the glade, and found the jagged remains of a termite mound fractured the day before. Its core had hardened to something close to stone. Malik gripped a wedge of the mound, prying loose a shard with the journal’s leather strap. The lion stalked forward, confused by the lack of fear, its tail cutting arcs of agitation. Malik angled the shard like a crude blade and snapped a dry liana from the low branches overhead, a coiled whip scored by his machete the previous afternoon.`,
  `When the lion finally lunged, Malik pivoted. He drove the stone shard beneath the beast’s jawline, not to wound fatally but to shock, to buy breath. Blood sprayed, hot and metallic, yet the lion’s weight still crashed him to the forest floor. Malik twisted, using the slick loam to slide free of the claws. The liana lashed forward, cracking across the lion’s muzzle with a whipcord snap amplified by the steaming humidity. The beast recoiled, furious, and Malik threw a handful of powdered termite clay into its eyes, blinding it long enough to roll toward the buttress roots of a towering kapok tree.`,
  `Pinned against the trunk, Malik spotted the tangle of strangler figs threaded around the tree’s base. He looped the liana through the living ropes, fashioning a noose as the lion shook earth from its mane. The second charge came heavier, driven by rage. Malik waited until the last heartbeat, then dove aside. The lion’s momentum shoved its neck into the loop. Malik heaved the vines tight, using the tree as an anchor, every muscle burning. The loop cinched, choking the roar into a guttural rasp.`,
  `Still the lion thrashed, claws carving trenches in the moss. Malik braced his heels against the root, leaning back with the weight of a man who refused to be a footnote in the jungle. He whispered to steady himself—not prayers, but the survival mantras drilled into him from years of field work. The vines held. The lion’s power ebbed, not beaten solely by force, but by Malik’s refusal to surrender control of the battleground. When the final shudder passed through the cat’s frame, the jungle exhaled with him.`,
  `Malik remained knelt in the cooled aftermath, palms trembling, listening for another predator drawn by the struggle. None came. The lion lay motionless, defeated not by a weapon, but by a traveler who refused to accept the odds. He freed the loop respectfully, covering the fallen king with broad leaves in acknowledgement. Courage, cunning, and a relentless will had turned the jungle itself into an ally. Malik emerged from the clearing alive, the story etched into every step he took toward the river and the promise of rescue.`
];

export default function Page() {
  return (
    <main>
      <h1>Against the Impossible</h1>
      <section>
        {paragraphs.map((text) => (
          <p key={text.slice(0, 20)}>{text}</p>
        ))}
        <blockquote>
          Malik learned that survival in the jungle is a pact: respect its brutal lessons, and it might grant you the strength to write your own ending.
        </blockquote>
        <p>
          With the lion silenced and the clearing reclaimed, Malik marked the spot on his map. The jungle remained vast and unforgiving, but now he moved through it not as prey, nor merely as a traveler, but as a survivor who had carved his legend into the heartbeat of the wild.
        </p>
      </section>
    </main>
  );
}
