"use client";

import React from "react";
import { TEAM } from "@/lib/data/team";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sprout } from "lucide-react";

export default function TeamGrid() {
  return (
    <section className="py-20 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
            Tim Pengembang
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-forest-green">
            Mahasiswa Wirausaha Universitas Brawijaya
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-brand-forest-green/70 max-w-xl mx-auto font-sans leading-relaxed">
            Mahasiswa program studi Agroekoteknologi FP UB yang berkolaborasi mengoptimalkan minyak nilam lokal menjadi bernilai ekonomi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <Card
              key={member.id}
              className="border-brand-forest-green/5 hover:border-brand-gold/30 bg-white hover:-translate-y-2 hover:shadow-lg duration-300 flex flex-col justify-between"
            >
              <CardHeader className="text-center pb-2 flex flex-col items-center">
                {/* Image or Initials Placeholder */}
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold/20 overflow-hidden shadow-inner mb-4 bg-brand-forest-green/10 flex items-center justify-center text-brand-forest-green text-3xl font-serif font-extrabold relative">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span>{member.name[0]}</span>
                  )}
                </div>
                <CardTitle className="text-lg font-bold font-serif text-brand-forest-green">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-xs font-sans text-brand-gold font-semibold uppercase mt-1">
                  {member.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center pt-2 font-sans flex flex-col items-center">
                <Badge variant="outline" className="flex items-center gap-1 text-[10px] border-brand-forest-green/20">
                  <Sprout className="w-3 h-3 text-brand-gold" />
                  <span>{member.faculty}</span>
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
