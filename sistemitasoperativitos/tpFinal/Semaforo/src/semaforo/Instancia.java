/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package semaforo;

import java.lang.Integer;
import java.util.ArrayList;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author tomas
 */
public class Instancia {

    List<List<Semaforo>> semaforosSuperiores; //valor de los semaforos superiores.
    List<List<Semaforo>> semaforosInferiores; //valor de los semaforos inferiores.
    Integer[] valoresSemaforos; //valor de las variables de los semaforos.
    List<Character> resultado; // lista de los distintos tipos de procesos que van finalizando su corrida.

    public Instancia(List<List<Semaforo>> semaforosSuperiores, List<List<Semaforo>> semaforosInferiores, Integer[] valoresSemaforos, List<Character> resultado) {
        this.semaforosSuperiores = semaforosSuperiores;
        this.semaforosInferiores = semaforosInferiores;
        this.valoresSemaforos = valoresSemaforos;
        this.resultado = resultado;
    }


    public Instancia(Integer cantidadProcesos, Integer cantidadSemaforos) {
        this.semaforosSuperiores = new ArrayList<List<Semaforo>>();
        this.semaforosInferiores = new ArrayList<List<Semaforo>>();
        for(Integer i=0; i< cantidadProcesos; i++){
            this.semaforosSuperiores.add(new ArrayList<Semaforo>());
            this.semaforosInferiores.add(new ArrayList<Semaforo>());

            this.agregarSemaforoSuperior(new Semaforo(null, null, new ArrayList<Integer>()), i);//Renglón para esperar antes del comienzo
        }

        this.valoresSemaforos = new Integer[cantidadSemaforos];
        for(Integer i=0; i< cantidadSemaforos; i++){
            this.valoresSemaforos[i] = 0;
        }

        this.resultado = new ArrayList<Character>();
    }

    public void agregarSemaforoSuperior(Semaforo semaforo, Integer numTipoProc){
        System.out.println("Antes " + this.semaforosSuperiores.get(numTipoProc).size());
        this.semaforosSuperiores.get(numTipoProc).add(semaforo);
        System.out.println("Después " + this.semaforosSuperiores.get(numTipoProc).size());
    }

    public void agregarSemaforoInferior(Semaforo semaforo, Integer numTipoProc){
        this.semaforosInferiores.get(numTipoProc).add(semaforo);
    }

    public List<Character> getResultado() {
        return resultado;
    }

    public List<List<Semaforo>> getSemaforosInferiores() {
        return semaforosInferiores;
    }

    public List<List<Semaforo>> getSemaforosSuperiores() {
        return semaforosSuperiores;
    }

    public Integer[] getValoresSemaforos() {
        return valoresSemaforos;
    }

    public void setResultado(List<Character> resultado) {
        this.resultado = resultado;
    }

    public void setSemaforosInferiores(List<List<Semaforo>> semaforosInferiores) {
        this.semaforosInferiores = semaforosInferiores;
    }

    public void setSemaforosSuperiores(List<List<Semaforo>> semaforosSuperiores) {
        this.semaforosSuperiores = semaforosSuperiores;
    }

    public void setValoresSemaforos(Integer[] valoresSemaforos) {
        this.valoresSemaforos = valoresSemaforos;
    }

    public List<String> listaDeSemaforosSuperiores(Integer i){
        return this.listaDeSemaforos(true, i);
    }

    public List<String> listaDeSemaforosInferiores(Integer i){
        return this.listaDeSemaforos(false, i);
    }


    private List<String> listaDeSemaforos(Boolean b, Integer i) {
        List<String> res = new ArrayList<String>();
        List<List<Semaforo>> l = null;
        if(b)
            l = this.semaforosSuperiores;
        else
            l = this.semaforosInferiores;

        List<Semaforo> lista = l.get(i);
        String temp; Semaforo semTemp = null;
        for(Integer j=0; j<lista.size(); j++){
            temp = "";
            semTemp = lista.get(j);
            if(semTemp.getEsP() != null){
                if(semTemp.getEsP())
                    temp += "P(X"+semTemp.getValor()+")";
                else
                    temp += "V(X"+semTemp.getValor()+")";
            } else {
                temp += "Previo";
            }

            temp += " - ";

            for(Integer k=0; k< semTemp.getCantProc(); k++){
                if(k>0)
                    temp+=", ";

                temp += (char) (65+i) +"" + semTemp.getProceso(k);
            }

            res.add(temp);
        }


        return res;
    }
    

}
