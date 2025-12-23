ALTER TABLE "monsters" DROP CONSTRAINT "fk_kill_by";
--> statement-breakpoint
ALTER TABLE "monsters" ADD CONSTRAINT "monsters_kill_by_heroes_id_fk" FOREIGN KEY ("kill_by") REFERENCES "public"."heroes"("id") ON DELETE no action ON UPDATE no action;