'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-[#F9F6EF] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16">
          Areas of Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Card 1 */}
          <div>
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/healthcare.jpg"
                alt="Therapy for Healthcare Providers"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium mb-3">
              Therapy for Healthcare Providers and Students
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The care you provide for others may be driving you to seek therapy, whether due to burnout,
              compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether
              you're in pre-professional school, undergoing training, or reflecting on a long career in
              healthcare, we can address the unique stressors of your professional environment along with
              any challenges you may be facing in other areas of your life.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/trauma.jpg"
                alt="Therapy for Trauma and Grief"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium mb-3">
              Therapy for Trauma and Grief
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Life’s challenges, whether a difficult childhood, a traumatic event or series of events,
              or the loss of someone or something deeply meaningful, can lead to profound experiences
              of trauma and grief. Therapy offers a supportive space to process these experiences, care
              for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/immigrant.jpg"
                alt="Therapy for Second Generation Individuals"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium mb-3">
              Therapy for Second Generation Individuals <br /> In Immigrant Families
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Second-generation individuals in immigrant families, born in the U.S. to at least one parent
              born abroad, often navigate the complexities of multiple cultures and diverse expectations.
              This experience can bring challenges such as feeling like a foreigner in your own country
              and navigating strained family relationships. Therapy offers a supportive space to explore
              and process this unique aspect of your identity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
