package itp_library;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connect {
    private static Connection conn;
    private static final String driver = "com.mysql.jdbc.Driver";
    private static final String user = "root";
    private static final String pass = "123456789";
    private static final String db = "libreria";
    private static final String url = "jdbc:mysql://localhost:3306/libreria?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
    
    public Connect(){
        conn = null;
        try{
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, pass);
            
            // Connect?
            if(conn != null)
                System.out.println("Conexión establecida exitosamente");
        }catch (ClassNotFoundException | SQLException ex){
            System.out.println("Conexión Fallida:\n\n"+ex);
        }
    }
    
    public Connection getConnection(){
        return conn;
    }
}
