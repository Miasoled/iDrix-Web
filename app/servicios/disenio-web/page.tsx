import { Navbar } from "@/components/Navbar";
import {HeroWeb} from "@/components/hero-Services/hero-web";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";


export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <HeroWeb />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Diseño Responsivo</CardTitle>
                    </CardHeader>
                </Card>  
                <Card>
                    <CardHeader>
                        <CardTitle>Diseño Responsivo</CardTitle>
                    </CardHeader>
                </Card> 
                <Card>
                    <CardHeader>
                        <CardTitle>Diseño Responsivo</CardTitle>
                    </CardHeader>
                </Card>   
            </div>
        </main>
    );
}